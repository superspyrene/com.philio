"use strict";
// Product Name:    Smart Energy Plug In Switch PAN11-1
// Brand Name:    Philio
// Product Line:    Philio Z-Wave Product
// Product Code:    PAN11-1
// Product Version:    1.1
const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Philio_PAN11_1 extends ZwaveDevice {
    async onMeshInit() {
        //this.enableDebug();
        //this.printNode();
        this.registerCapability('onoff', 'SWITCH_BINARY');
        this.registerCapability('measure_power', 'METER');
        this.registerCapability('meter_power', 'METER');
        this.registerCapability('measure_voltage', 'METER');
        this.registerCapability('measure_current', 'METER');
    }
}

module.exports = Philio_PAN11_1;

