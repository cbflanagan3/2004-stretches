// Fix the Messenger class to check input and to allow listeners to unsubscribe

class Messenger {
  constructor(channel, listeners) {
    this.channel = channel;
    this.listeners = {};
    if(typeof this.channel !== 'string' || typeof this.listeners !== 'object') {
      throw new Error ('Need name and object');
    }
   
  }

  
  getChannel(type) {
    this.listeners[type] = this.listeners[type] || [];
    return this.listeners[type];
  }
  subscribe(type, fn) {
    this.getChannel(type).push(fn);
  }
  unsubscribe(type){
    const result = this.getChannel(type);
    console.log(result);
  }

  publish(type, msg) {
    this.getChannel(type).forEach((listener) =>
      listener(`${this.channel} - ${type} - ${msg}`)
    );
  }
}

module.exports = { Messenger };
