// Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

function copyObj(originalObj, arrayKeys) {
  let newObj = {};

  if (arrayKeys) {
      arrayKeys.forEach(key => {
        if (originalObj.hasOwnProperty(key)) {
          newObj[key] = originalObj[key];
        };
      });
  }
  else {
      Object.assign(newObj, originalObj);
  }
  return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }
