// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Called when a message is passed.  We assume that the content script
// wants to show the page action.

var active = false;

function onRequest(request, sender, sendResponse) {
  // Show the page action for the tab that the sender (content script)
  // was on.
	chrome.pageAction.show(sender.tab.id);

	chrome.pageAction.onClicked.addListener(function(tab){
		active = !active;
		chrome.pageAction.setIcon({tabId: tab.id, path: active ? 'icon.png' : 'icon_inactive.png'});
		chrome.pageAction.setTitle({tabId: tab.id, title: active ? 'Hide transparency' : 'Show transparency'});
		chrome.tabs.sendRequest(tab.id, {active: active}, function(response) {
	});
  });



  // Return nothing to let the connection be cleaned up.
  sendResponse({});
};
// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);
