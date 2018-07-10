const assert = require("assert")
const userData1 = require("./users").data
const userData2 = require("./users2").data

describe("users data 1", function() {
  it("is complete/valid", () => {
    userData1.forEach(user => {
      assert.ok(user.name, "user name property should be a non-empty string")
      assert.ok(
        typeof user.dateOfBirth === "string",
        "user dateOfBirth property should be a non-empty string"
      )
    })
  })
})

describe("users data 2", function() {
  it("is complete/valid", () => {
    userData2.forEach(user => {
      assert.ok(user.name, "user name property should be a non-empty string")
      assert.ok(
        user.birthday && typeof user.birthday === "number",
        "user birthday property should be a non-zero number"
      )
    })
  })
})
