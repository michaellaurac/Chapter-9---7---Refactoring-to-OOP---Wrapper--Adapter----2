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
module.exports = { Target, Adaptee };
