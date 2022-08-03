
const edTechObj = {
    "name":"Relevel"
};

// Object.freeze(edTechObj);
// delete edTechObj.name;
// Object.seal(edTechObj);
// edTechObj.name="Unacademy";
// edTechObj.website="www.relevel.com";
console.log(edTechObj);

// Object.Freeze
    // 1. Can't add, update or delete.
// Onject.Seal
    // 1. Can't add, delete, but can update.

// Check if object is sealed or not.
console.log(Object.isSealed(edTechObj));