var proxy =  "PROXY 157.7.51.12:8080;";
var domains = {
	"v2ex.com": 1,
	"google.com": 1,
	"facebook.com": 1,
	"android.com": 1,
	"conoha.jp": 1,
	"dropbox.com": 1,
	"dropboxusercontent.com": 1,
	"ggpht.com": 1,
	"gstatic.com": 1,
	"sourceforge.net": 1,
	"twitter.com": 1,
	"wikipedia.org": 1,
	"youtube.com": 1,
	"ytimg.com": 1,
	"icloud.com": 1,
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
	var suffix;
	var pos = host.lastIndexOf('.');
	for (; ; ) {
		suffix = host.substring(pos + 1);
		if (hasOwnProperty.call(domains, suffix)) {
			return proxy;
		}
		if (pos <= 0) {
			return direct;
		}
		pos = host.lastIndexOf('.', pos - 1);
	}
}
