class Target {
  hello () {
    return "hello";
  }

  goodbye () {
    return "goodbye";
  }
};

class Adaptee {
  hi () {
    return "hi";
  }

  bye () {
    return "bye";
  }
}

class Adapter {
  constructor (adaptee) {
    this.hello = adaptee.hi;
    this.goodbye = adaptee.bye;
  }
}

module.exports = { Target, Adaptee, Adapter };
