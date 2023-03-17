document.getElementById("openShortcut").addEventListener("click", function () {
  chrome.tabs.create({ url: "https://app.shortcut.com/" });
});
