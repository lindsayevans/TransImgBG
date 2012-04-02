
// TODO:
// - check if the image has transparency? (get image pixel data, look through til trans/semi-trans found)
// - moar options (background colour)


// This is currently the best check for whether we're viewing an image by itself
var standalone_images = document.querySelectorAll('body > img[style*="-webkit-user-select: none; cursor: -webkit-zoom"]');
if(standalone_images.length === 1){
	// Send message to background page - displays the page action icon 
  chrome.extension.sendRequest({}, function (response) {});
}

// Listen for request from the background page - toggle 'active' state of page action icon
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	standalone_images[0].style.background = request.active ? 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEX////f39/D27fmAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAABZ0RVh0Q3JlYXRpb24gVGltZQAwMy8zMC8xMp+A10AAAAAQSURBVAiZY2D4z4AV4RAGAH6/D/F9RRmSAAAAAElFTkSuQmCC)' : '';
});

