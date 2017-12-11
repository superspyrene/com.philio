'use strict';

const Homey = require('homey');

class PhilioZwave extends Homey.App {

  onInit() {

    this.log('Philio Z-wave app is running...');

  }

}

module.exports = PhilioZwave;