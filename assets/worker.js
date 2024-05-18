// worker.js

// Function to check if a URL is from the same origin
function isSameOrigin(url) {
  const loc = window.location;
  const a = document.createElement('a');
  a.href = url;
  return a.hostname === loc.hostname && a.port === loc.port && a.protocol === loc.protocol;
}

// Function to remove third-party scripts from the document
function removeThirdPartyScripts(docData) {
  const { location, scripts } = docData;
  // console.log(docData);
  const filteredScripts = scripts.filter(script => isSameOrigin(script));
  return filteredScripts.map(script => `<script src="${script}"></script>`).join('');
}

// Listen for messages from the main thread
self.onmessage = function(event) {
  const sanitizedScripts = removeThirdPartyScripts(event.data);
  // Send the sanitized scripts back to the main thread
  self.postMessage(sanitizedScripts);
};
