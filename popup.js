//Ê¹ÓÃGoogleµÄQR API
document.addEventListener('DOMContentLoaded', function () {
       chrome.tabs.getSelected(null, function(tab) {
	  var img = document.createElement('img');
      img.src = "http://chart.apis.google.com/chart?chs=200x200&cht=qr&chl="+encodeURI(tab.url); 
      document.body.appendChild(img);
    });
});

