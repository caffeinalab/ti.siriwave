var args = _.extend({
	width: 320,
	height: 150,
	ratio: OS_ANDROID ? Ti.Platform.displayCaps.logicalDensityFactor : Ti.Platform.displayCaps.dpi/160
}, arguments[0]);

function init() {
	var html = '<!DOCTYPE html>';
	html += '<html><head>';
	html += '<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />';
	html += '<style>html,body{margin:0;padding:0;}</style>';
	html += '</head><body>';
	html += '<script src="'+WPATH("/SiriWaveJS/siriwave.js")+'"></script>';
	html += '<script>window.SW = new SiriWave(' + JSON.stringify(args) + ');</script>';
	html += '</body></html>';
	$.siriWave.html = html;
}

function call(fn, val) {
	$.siriWave.evalJS('window.SW.' + fn + '(' + (val == null ? '' : JSON.stringify(val)) + ');');
}
exports.call = call;

function set(prop, val) {
	$.siriWave.evalJS('window.SW.' + prop + '=' + JSON.stringify(val));
}
exports.set = set;

exports.start = function() {
	return call('start');
};

exports.start = function() {
	return call('stop');
};

init();
