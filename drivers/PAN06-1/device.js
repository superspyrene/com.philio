"use strict";
// Product Name:    In Wall Dual relay(1 way) switch module PAN06-1
// Brand Name:    Philio
// Product Line:    Philio Z-Wave Product
// Product Code:    PAN06-1
// Product Version:    1.1
const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class Philio_PAN06_1 extends ZwaveDevice {
    async onMeshInit() {
        //this.enableDebug();
        //this.printNode();
        this.registerCapability('onoff', 'SWITCH_BINARY');
    }
}

module.exports = Philio_PAN06_1;
