/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var regex = /\.(png|gif)$/;
// Test the text of the body element against our regular expression.
// TODO:
// - better checking of whether we're viewing an image standalone
// - check if the image has transparency?
if (regex.test(location.href)) {
  // The regular expression produced a match, so notify the background page.
  chrome.extension.sendRequest({}, function (response) {});
} else {
  // No match was found.
}

// TODO:
// - use data URI for BG image
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	document.getElementsByTagName('IMG')[0].style.background = request.active ? 'url(http://boomshed.com/TransImgBG/bg_checkerboard.png)' : '';
});

