const EventEmitter = require('events');

class UserEventEmitter extends EventEmitter {}

// Export an instance of the class
module.exports = new UserEventEmitter();
