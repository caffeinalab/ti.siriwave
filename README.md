com.caffeinalab.titanium.siriwave
=================================

![image](http://f.cl.ly/items/33042k0o1R2K2y0S321g/Image%202014-06-09%20at%201.11.05%20pm.png)

![image](http://f.cl.ly/items/2q0I101D2t0p0W1Y0215/SWave.gif)

[Original controller in JS](https://github.com/CaffeinaLab/SiriWaveJS)

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
<Widget src="com.caffeinalab.titanium.siriwave" id="siri" autostart="true" noise="1" color="#fff" [args] />
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
## 
### Options

* **color**: The color of the wave
* **autostart**: Autostart the wave?
* **noise** The noise of the wave
* **speed** The speed of the wave


### Control in Controller

##### Set the noise

```javascript
$.siri.setNoise([ 0...1 ])
```

##### Set the speed

```javascript
$.siri.setSpeed(N);
```

##### Start the animation

```javascript
$.siri.start();
```

##### Stop the animation

```javascript
$.siri.stop();
```
