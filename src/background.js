
var active = false,
    background_colour,
    ctx_menu_id;

function onRequest(request, sender, sendResponse) {
	chrome.pageAction.show(sender.tab.id);

	if(!ctx_menu_id){
		ctx_menu_id = chrome.contextMenus.create({
			title: active ? 'Hide image transparency' : 'Show image transparency',
			contexts: ['image'],
			onclick: function(info, tab){
				active = !active;
				toggle_transparency(tab);
			}
		});
	}

	chrome.pageAction.onClicked.addListener(function(tab){
		active = !active;
		toggle_transparency(tab);
	});

	if(localStorage["show-transparency-default"]){
		active = localStorage["show-transparency-default"] === 'true';
		toggle_transparency(sender.tab);
	}
  // Return nothing to let the connection be cleaned up.
  sendResponse({});
};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);


function toggle_transparency(tab){
	background_colour = (localStorage["background-colour"] || '#fff');
	chrome.pageAction.setIcon({tabId: tab.id, path: active ? 'icon.png' : 'icon_inactive.png'});
	chrome.pageAction.setTitle({tabId: tab.id, title: active ? 'Hide transparency' : 'Show transparency'});
	chrome.contextMenus.update(ctx_menu_id, {title: active ? 'Hide image transparency' : 'Show image transparency'});
	chrome.tabs.sendRequest(tab.id, {active: active, background_colour: background_colour});
}
