var args = _.extend({
	width: 320,
	height: 150,
	color: '#fff',
	noise: 1,
	speed: 0.2,
	autostart: true
}, arguments[0] || {});


function init() {
	var html = '<!DOCTYPE html><html><head>';
	html += '<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />';
	html += '<style>html, body { margin: 0; padding: 0; }</style>';
	html += '<script src="'+WPATH("SiriWaveJS/raf.js")+'"></script>';
	html += '<script src="'+WPATH("SiriWaveJS/siriwave.js")+'"></script>';
	html += '</head><body><script>';

	html += 'var SW = new SiriWave(' + JSON.stringify({
		width: args.width,
		height: args.height,
		color: args.color,
		noise: args.noise,
		speed: args.speed,
		ratio: (function(){
			if (OS_ANDROID) return Ti.Platform.displayCaps.logicalDensityFactor;
			return Titanium.Platform.displayCaps.dpi/160;
		})(),
	}) + ');';

	if (args.autostart) html += 'SW.start();';

	html += '</script></body></html>';

	$.caffeinaSiriWave.applyProperties(args);
	$.caffeinaSiriWave.html = html;
}


function call(fn, ar) {
	var ev = 'SW.' + fn + '(' + ( _.isObject(ar) ? JSON.stringify(ar) : ( ar!==undefined ? ar : '' ) ) + ');';
	$.caffeinaSiriWave.evalJS(ev);
}
exports.call = call;

exports.start = function() {
	return call('start');
};

exports.start = function() {
	return call('stop');
};

exports.setNoise = function(v) {
	return call('setNoise', v);
};

exports.setSpeed = function(v) {
	return call('setSpeed', v);
};

exports.set = function(noise, speed) {
	return call('set', noise+','+speed);
};


init();
