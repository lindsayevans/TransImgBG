
// TODO:
// - check if the image has transparency? (get image pixel data, look through til trans/semi-trans found)
// - moar options (background colour)


// This is currently the best check for whether we're viewing an image by itself
var standalone_images = document.querySelectorAll('body > img[style*="-webkit-user-select: none"]');
if(standalone_images.length === 1){
	// Send message to background page - displays the page action icon 
  chrome.extension.sendRequest({}, function (response) {});
}

// Listen for request from the background page - toggle 'active' state of page action icon
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	standalone_images[0].style.background = request.active ? request.background_colour + ' url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAwMy8zMC8xMp+A10AAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAAMklEQVQ4jWP8//8/Az7AyMioiE+eCa9uIsCoAYPBAEYGBga88fz////7NHXBqAGDwQAAg64HPX2afs4AAAAASUVORK5CYII=)' : '';
});

