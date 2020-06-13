//	Chat is almost complete - solve the last spec

class Chat {
  constructor() {
    this.listeners = {};
    this.message = ''
  }
  join(str, fn) {
    Object.values(this.listeners).forEach((listener) =>
      listener(`${str} has joined chat!`)
    );
    this.listeners[str] = fn;
    return {};
  }

  talk(mes) {
    this.message.push(mes);
    Object.values(this.listeners).forEach((listener) =>
    listener(talk(this.message))
  );
   
  }
}

module.exports = { Chat };
