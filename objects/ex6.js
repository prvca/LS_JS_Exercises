/*
They two loops do not produce the same output. The forEach loops only iterates through the object's own properties (or in this case, the keys of myObj itself instead of those its protoype), while the for/in loop includes the properties of the prototype object.
*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// logs keys of myObj ONLY
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// logs keys of myObj AND prototype 
for (let key in myObj) {
  console.log(key);
}
