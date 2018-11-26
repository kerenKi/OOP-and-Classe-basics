const assert = require("assert")

describe("userClass", function() {
  it("userClass should be a constructor", () => {
    const userClass = require("./userClass")
    assert.equal(typeof userClass, "function", "The type of userClass should be a 'function' in order to be usable as a constructor")
    describe("users data 1", function() {
      it("is complete/valid", () => {
        const userData1 = require("./users").data
        const userData2 = require("./users2").data
        userData1.forEach(user => {
          sharedChecks(user)
          assert.ok(
            typeof user.dateOfBirth === "string",
            "user dateOfBirth property should be a non-empty string"
          )
        })
      })
    })
    
    describe("users data 2", function() {
      it("is complete/valid", () => {
        const userData1 = require("./users").data
        const userData2 = require("./users2").data
        userData2.forEach(user => {
          sharedChecks(user)
          assert.ok(
            user.birthday && typeof user.birthday === "number",
            "user birthday property should be a non-zero number"
          )
        })
      })
    })
    
  })
})


function sharedChecks(user) {
  assert.notStrictEqual(user.constructor, Object, "the user object " + JSON.stringify(user) + " was not created using a constructor")
  assert.ok(user.name, "user name property should be a non-empty string")
  assert.ok(user.getBirthday, "the user object " + JSON.stringify(user) + " is missing a getBirthday function")
  assert.equal(typeof user.getBirthday, "function", "the user object " + JSON.stringify(user) + " has a getBirthday property, but it's not a function")
}
