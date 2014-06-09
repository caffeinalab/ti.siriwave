com.caffeinalab.titanium.siriwave
=================================

![image](http://f.cl.ly/items/2q0I101D2t0p0W1Y0215/SWave.gif)

## [https://github.com/CaffeinaLab/SiriWaveJS](Original documentation)

## Installation

#### Via Gittio

```
gittio install com.caffeinalab.titanium.siriwave
```

#### Via Github

```
git clone git@github.com:CaffeinaLab/com.caffeinalab.titanium.siriwave.git app/widgets/com.caffeinalab.titanium.siriwave
```

And add in your *config.json*, under `dependencies`:

```
"dependencies": {
    "com.caffeinalab.titanium.siriwave": "*"
}
```

## Usage

### Require in the View

```xml
<Widget src="com.caffeinalab.titanium.siriwave" id="siri" autostart="true" noise="1" color="#fff" />
```

And stylize globally via **app.tss*:

```
"#caffeinaSiriWave" : {
	width: 320,
	height: 150,
	backgroundColor: 'black',
	borderColor: 'red',
	noise: 0.5
}
```

### Options

* **color**: The color of the wave
* **autostart**: Autostart the wave?
* **noise** The noise of the wave
* **speed** The speed of the wave


### Control in Controller

### Set the noise

```javascript
$.siri.setNoise([ 0...1 ])
```

### Set the speed

```javascript
$.siri.setSpeed(0.4);
```

### Start the animation

```javascript
$.siri.start();
```

### Stop the animation

```javascript
$.siri.stop();
```
