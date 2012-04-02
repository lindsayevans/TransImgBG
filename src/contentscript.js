/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */
var regex = /\.(png|gif)$/;
// Test the text of the body element against our regular expression.
// TODO:
// - better checking of whether we're viewing an image standalone
// - check if the image has transparency? (get image pixel data, look through til trans/semi-trans found)
if (regex.test(location.pathname)) {
  // The regular expression produced a match, so notify the background page.
  chrome.extension.sendRequest({}, function (response) {});
} else {
  // No match was found.
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	document.getElementsByTagName('IMG')[0].style.background = request.active ? 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEX////f39/D27fmAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAABZ0RVh0Q3JlYXRpb24gVGltZQAwMy8zMC8xMp+A10AAAAAQSURBVAiZY2D4z4AV4RAGAH6/D/F9RRmSAAAAAElFTkSuQmCC)' : '';
});

