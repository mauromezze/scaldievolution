function doClick(e) {
    
var url = "http://"+$.input.value+"/H";
var xhr = Ti.Network.createHTTPClient({
	onload : function(e) {
		// this.responseText holds the raw text return of the message (used for JSON)
		// this.responseXML holds any returned XML (used for SOAP web services)
		// this.responseData holds any returned binary data
		//Ti.API.debug(this.responseText);
		//alert('Google lookup successful!');
	},
	onerror : function(e) {
		Ti.API.debug(e.error);
		alert('Connection Error');
	},
	timeout : 5000
});
    
    xhr.open("GET", url);
	xhr.send();
    
}

function doClick1(e) {
var url = "http://"+$.input.value+"/L";
var xhr = Ti.Network.createHTTPClient({
	onload : function(e) {
		// this.responseText holds the raw text return of the message (used for JSON)
		// this.responseXML holds any returned XML (used for SOAP web services)
		// this.responseData holds any returned binary data
		//Ti.API.debug(this.responseText);
		//alert('Google lookup successful!');
	},
	onerror : function(e) {
		Ti.API.debug(e.error);
		alert('Connection Error');
	},
	timeout : 5000
});
    
    xhr.open("GET", url);
	xhr.send();
}

$.index.open();
