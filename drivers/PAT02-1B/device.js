"use strict";
// Product Name:	Temperature and Humidity sensor
// Brand Name:	Philio
// Product Line:	Philio Z-Wave Product
// Product Code:	PST02-1B
// Product Version:	1.0
// http://products.z-wavealliance.org/products/1350

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;
 
class Philio_PAT02_1B extends ZwaveDevice {
    async onMeshInit() {
        //this.enableDebug();
        //this.printNode();
		this.registerCapability('alarm_tamper', 'SENSOR_BINARY');
		this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
		this.registerCapability('measure_humidity', 'SENSOR_MULTILEVEL');
		this.registerCapability('measure_battery', 'BATTERY');
    }
}

module.exports = Philio_PAT02_1B;
