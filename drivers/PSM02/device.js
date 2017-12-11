'use strict';
const tamperCancellation = {};
// Product Name:	Slim Multi-Sensor PSM02
// Brand Name:	Philio
// Product Line:	Philio Z-Wave Product
// Product Code:	PSM02
// Product Version:	1.0

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Philio_PSM02 extends ZwaveDevice {
	async onMeshInit() {
		//this.enableDebug();
		//this.printNode();
		this.registerCapability('alarm_motion', 'SENSOR_BINARY');
		this.registerCapability('alarm_contact', 'SENSOR_BINARY');
		this.registerCapability('alarm_tamper', 'SENSOR_BINARY');
		this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
		this.registerCapability('measure_luminance', 'SENSOR_MULTILEVEL');
		this.registerCapability('measure_battery', 'BATTERY');
	}
}

module.exports = Philio_PSM02;
