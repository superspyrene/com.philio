"use strict";
// Product Name:	Flood sensor
// Brand Name:	Philio
// Product Line:	Philio Z-Wave Product
// Product Code:	PST02-1C
// Product Version:	1.0
// http://products.z-wavealliance.org/products/1186

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;
 
class Philio_PAT02_1C extends ZwaveDevice {
    async onMeshInit() {
        //this.enableDebug();
        //this.printNode();
		this.registerCapability('alarm_tamper', 'SENSOR_BINARY');
		this.registerCapability('alarm_water', 'SENSOR_BINARY');
		this.registerCapability('measure_battery', 'BATTERY');
    }
}

module.exports = Philio_PAT02_1C;
