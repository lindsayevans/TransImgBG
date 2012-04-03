
var active = false,
    background_colour,
    ctx_menu_id;

function onRequest(request, sender, sendResponse) {
	chrome.pageAction.show(sender.tab.id);

	chrome.pageAction.onClicked.addListener(function(tab){
		active = !active;
		background_colour = (localStorage["background-colour"] || '#fff');
		chrome.pageAction.setIcon({tabId: tab.id, path: active ? 'icon.png' : 'icon_inactive.png'});
		chrome.pageAction.setTitle({tabId: tab.id, title: active ? 'Hide transparency' : 'Show transparency'});
		chrome.contextMenus.update(ctx_menu_id, {checked: active});
		chrome.tabs.sendRequest(tab.id, {active: active, background_colour: background_colour});
  });

	if(localStorage["show-transparency-default"]){
		active = localStorage["show-transparency-default"] === 'true';
		background_colour = (localStorage["background-colour"] || '#fff');
		chrome.pageAction.setIcon({tabId: sender.tab.id, path: active ? 'icon.png' : 'icon_inactive.png'});
		chrome.pageAction.setTitle({tabId: sender.tab.id, title: active ? 'Hide transparency' : 'Show transparency'});
		chrome.contextMenus.update(ctx_menu_id, {checked: active});
		chrome.tabs.sendRequest(sender.tab.id, {active: active, background_colour: background_colour});
	}

  // Return nothing to let the connection be cleaned up.
  sendResponse({});
};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);

// TODO:
// - Make it appear top level of menu
ctx_menu_id = chrome.contextMenus.create({
	type: 'checkbox',
	title: 'Show image transparency',
	checked: active,
	contexts: ['image'],
	onclick: function(info, tab){
		active = !active;
		background_colour = (localStorage["background-colour"] || '#fff');
		chrome.pageAction.setIcon({tabId: tab.id, path: active ? 'icon.png' : 'icon_inactive.png'});
		chrome.pageAction.setTitle({tabId: tab.id, title: active ? 'Hide transparency' : 'Show transparency'});
		chrome.tabs.sendRequest(tab.id, {active: active, background_colour: background_colour});
	}
});
