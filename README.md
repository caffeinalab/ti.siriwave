# Ti.SiriWave

### com.caffeinalab.titanium.siriwave

##[Original controller in JS](https://github.com/CaffeinaLab/SiriWaveJS)

![image](http://f.cl.ly/items/2q0I101D2t0p0W1Y0215/SWave.gif)


## Installation

#### Via Gittio

```
gittio install com.caffeinalab.titanium.siriwave
```

#### Via Github

Download the latest release in `app/widgets`, and in your *config.json*, under `dependencies` add:

```
"dependencies": {
    "com.caffeinalab.titanium.siriwave": "*"
}
```

## Usage

### Require in the View

```xml
<Widget src="com.caffeinalab.titanium.siriwave" id="siri" autostart="true" noise="1" color="#fff" [options] />
```

And stylize globally via *app.tss*:

```javascript
"#caffeinaSiriWave" : {
	width: 320,
	height: 150,
	backgroundColor: 'black',
	borderColor: 'red',
	noise: 0.5
}
```

### Options

* `color (String)`: The color of the wave
* `autostart (Boolean)`: Autostart the wave?
* `noise (Number, from 0 to 1)` The noise of the wave
* `speed (Number, from 0 to N)` The speed of the wave

#### Set the noise

```javascript
$.siri.setNoise([ 0...1 ])
```

#### Set the speed

```javascript
$.siri.setSpeed(N);
```

#### Start the animation

```javascript
$.siri.start();
```

#### Stop the animation

```javascript
$.siri.stop();
```
