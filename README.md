# Ti.SiriWave

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/CaffeinaLab/Ti.SiriWave?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### com.caffeinalab.titanium.siriwave

####[Watch the original script in JS](https://github.com/CaffeinaLab/SiriWaveJS)

![image](http://f.cl.ly/items/2q0I101D2t0p0W1Y0215/SWave.gif)


## Installation

#### Via Gittio

```
gittio install com.caffeinalab.titanium.siriwave
```

#### Via Github

Download the latest release, unzip in `app/widgets`, and in your *config.json*, under `dependencies` add:

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
	noise: 0.5
}
```

## Properties

#### `[speed]` (Number, from `0` to `1`, default: `0.1`)

The speed of the wave.

#### `[amplitude]` (Number, from `0` to `1`, default: `1`)

The noise (amplitude) of the wave.

#### `[frequency]` (Number, from `0` to `N`, default: `1`)

The noise (amplitude) of the wave.

#### `[color]` (String, Color, default: `#fff')

The color of the wave, in hexadecimal form (`#336699`, `#FF0`)

## API

#### `set(property, value)`
Set the property at runtime

#### `start()`
Start the wave

#### `stop()`
Stop the wave
