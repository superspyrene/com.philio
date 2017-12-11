"use strict";
// Product Name:    In Wall Dual relay(1 way) switch module PAN04-1
// Brand Name:    Philio
// Product Line:    Philio Z-Wave Product
// Product Code:    PAN04-1
// Product Version:    1.0

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Philio_PAN04_1 extends ZwaveDevice {
    async onMeshInit() {
        //this.enableDebug();
        //this.printNode();
        this.registerCapability('onoff', 'SWITCH_BINARY');
        this.registerCapability('measure_power', 'METER');
        this.registerCapability('meter_power', 'METER');
    }
}

module.exports = Philio_PAN04_1;
