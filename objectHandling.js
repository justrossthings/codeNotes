//object creation methods
//classical
function Car(model, year, owner) {
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.aFunction = aFunction; //uses existing args
}

//creating an object
const lexus = new Car("Lexus", 1999, "Ken");

//adding a new property
Car.prototype.color = null;

//Object.create method PROTOTYPICAL
const human = {
  //internal create property (a function with one arg)
  create: function (value) {
    var instance = Object.create(this);
    //ones one arg
    instance.name = name;
    return instance;
  },
  //
  //multi-arg create function
  create2: function (values) {
    var instance = Object.create(this);
    Object.keys(values).forEach(function (key) {
      instance[key] = values[key];
    });
    return instance;
  },
  //
  species: "human",
  sayName: function () {
    console.log(this.name);
  },
  saySpecies: function () {
    console.log(this.species);
  }
}

var musician = Object.create(human);
musician.name = "Will";
musician.instrument = "Drums";


//pushing API data into an object
var brokerages = {};
var total = 0;

while (data.length) {
  total += data.amount;
  if (brokerages.hasOwnProperty("data.brokerage")) {
    brokerages[data.brokerage].brokerTotal += data.amount;
    brokerages[data.brokerage].accounts.push({data.accId = data.amount
  })
    ;
  }
  else {
    brokerages[data.brokerage].brokerTotal = data.amount;
    brokerages[data.brokerage].accounts.push({data.accId = data.amount
  })
    ;
  }
}

//looks like this
var brokeragesDemo = {
  "brokerOne": {
    "brokerTotal": 2332,
    "accounts": [
      {"Acc123": 320},
      {"Acc223": 463},
      {"Acc653": 1203}
    ]
  },
  "brokerTwo": {
    //etc
  }
};


//getting account data
brokeragesDemo[brokerOne].accounts.find(function (items) {
  return items.accId == 123;
}).amount;


//fucking watch this trickery
function bind(func, context) {
  //console.log(arguments[2]);
  return func.bind(context, arguments[2]); //binds 'me' to sayname and gives it an arg
}

// test case - do not modify
(function () {
  var sayname = function (one, two) {
    var string = "I am " + this.name + " " + one + " " + two;
    console.log(string);
    return string;
  };
  
  var me = {name: "Robert"};
  
  var boundfunc = bind(sayname, me, "J.");
  if (boundfunc("Dobbs") === "I am Robert J. Dobbs") { //gives sayname 1 arg
    console.log("SUCCESS!"); // NEED TO PRINT THIS!
  }
})();

var Publisher = {
  cbArr: [],
  addCb: function (callbackFunc) {
    this.cbArr.push(callbackFunc);
    return this;
  },
  removeCb: function (callbackFunc) {
    this.cbArr.filter(function (value) {
      if (value == callbackFunc) {
        return false;
      } else {
        return true;
      }
    })
  },
  fireAll: function () {
    var argus = arguments;
    this.cbArr.forEach(function (callbackFunc) {
      callbackFunc(argus);
    })
  }
};

class Food {
  // args!!!!
  constructor (name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
  // method!!
  toString () {
    return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
  }
  // another method!!
  print () {
    console.log( this.toString() );
  }
}

// FatFreeFood is a derived class
class FatFreeFood extends Food {
  //takes 3 args, prefilss 'fat'
  constructor (name, protein, carbs) {
    super(name, protein, carbs, 0);
  }
  // runs inherited method
  print () {
    super.print();
    console.log(`Would you look at that -- ${this.name} has no fat!`);
  }
  
}