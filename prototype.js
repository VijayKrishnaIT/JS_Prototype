/*
function class_one() {
  this.sub_one = "ReactJS";
  this.sub_two = "NodeJS";
  this.sub_three = "MongoDB";
}

let obj = new class_one();

console.log(obj.sub_one, obj.sub_two, obj.sub_three); // ReactJS NodeJS MongoDB
*/

/*
function class_one(arg1, arg2, arg3) {
  this.var_one = arg1;
  this.var_two = arg2;
  this.var_three = arg3;
}

let obj1 = new class_one("Angular11", "NodeJS", "MongoDB");

console.log(obj1.var_one, obj1.var_two, obj1.var_three); //Angular11 NodeJS MongoDB

let obj2 = new class_one("ReactJS", "NodeJS", "couchDB");

console.log(obj2.var_one, obj2.var_two, obj2.var_three); //ReactJS NodeJS couchDB

let obj3 = new class_one("vueJS", "Deno", "couchDB");
//access the members
console.log(obj3.var_one, obj3.var_two, obj3.var_three); // vueJS Deno couchDB
*/
/*
function class_one() {
  this.wish = "NodeJS";
  this.getWish = function () {
    return `welcome to ${this.wish}`;
  };
}

let obj = new class_one();

console.log(obj.getWish()); // welcome to NodeJS
*/

/*
function class_one(obj) {
  this.var_one = obj;
}

function class_two() {
  this.my_fun = function () {
    return "welcome to ReactJS";
  };
}

let obj = new class_one(new class_two());

console.log(obj.var_one.my_fun()); //welcome to ReactJS
*/

/*
function class_one() {}

//Add variable dynamically to constructor functions.

class_one.prototype.var_one = "ReactJS";
class_one.prototype.var_two = "NodeJS";
class_one.prototype.var_three = "MongoDB";

let obj = new class_one();

console.log(obj.var_one, obj.var_two, obj.var_three); //ReactJS NodeJS MongoDB

*/

/*
function class_one() {}

class_one.prototype.var_one = "Hello_1";

function class_two() {}

//how to create inheritance
//single level inheritance
class_two.prototype = Object.create(class_one.prototype);
class_two.prototype.var_two = "hello2";

let obj1 = new class_one();
console.log(obj1.var_one); //Hello_1

let obj2 = new class_two();
console.log(obj2.var_one, obj2.var_two); //Hello_1 hello2
*/

/*
function class_one() {}

class_one.prototype.fun_one = function () {
  return "Hello1";
};

function class_two() {}

class_two.prototype = Object.create(class_one.prototype);
class_two.prototype.fun_two = function () {
  return "Hello2";
};

let obj1 = new class_one();
console.log(obj1.fun_one()); //Hello1

let obj2 = new class_two();
console.log(obj2.fun_one(), obj2.fun_two()); //Hello1 Hello2
*/

/*
//super class is class_one
function class_one() {}

class_one.prototype.var1 = "class_one";
class_one.prototype.fun1 = function () {
  return this.var1;
};

//child class is class_two
function class_two() {}

class_two.prototype = Object.create(class_one.prototype);
//Add variable and function dynamically

class_two.prototype.var2 = "class_two";

class_two.prototype.fun2 = function () {
  return this.var2;
};

//subclass is class_three
function class_three() {}

class_three.prototype = Object.create(class_two.prototype);

class_three.prototype.var3 = "class_three";

class_three.prototype.fun3 = function () {
  return this.var3;
};

let obj1 = new class_one();
console.log(obj1.var1, obj1.fun1()); //class_one class_one

let obj2 = new class_two();
console.log(obj2.var1, obj2.fun1(), obj2.var2, obj2.fun2()); //class_one class_one class_two class_two

let obj3 = new class_three();
console.log(
  obj3.var1,
  obj3.fun1(),
  obj3.var2,
  obj3.fun2(),
  obj3.var3,
  obj3.fun3()
); //class_one class_one class_two class_two class_three class_three

*/

/*
function class_one() {}

class_one.prototype.var1 = "hello1";

function class_two() {}
class_two.prototype.var2 = "hello2";

function class_three() {}

class_three.prototype = Object.create(class_one.prototype);

class_three.prototype.var3 = "hello3";

class_three.prototype = Object.create(class_two.prototype);

let obj = new class_three();

console.log(obj.var1); //undefined
console.log(obj.var2); //hello2
*/

//overriding example

function class_one() {}

class_one.prototype.fun1 = function () {
  return "data from mongodb soon...!!";
};

function class_two() {}
class_two.prototype = Object.create(class_one.prototype);

class_two.prototype.fun1 = function () {
  return "CouchDB coming soon......!";
};

let obj = new class_two();
console.log(obj.fun1()); //CouchDB coming soon......!
