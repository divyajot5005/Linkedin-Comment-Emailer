document.getElementById('scrape').addEventListener('click', () => {
  console.log('Scrape button clicked');  // Add this line
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ['content.js']
    }, () => {
      console.log('Content script injected');  // Add this line
    });
  });
});
