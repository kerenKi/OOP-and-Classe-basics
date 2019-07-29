const assert = require("assert")
const userData1 = require("./users").data
const getUserBirthDate = require("./users").getUserBirthDate

describe("users data and function are complete/valid", function() {
  it("data is complete/valid", () => {
    userData1.forEach(user => {
      assert.ok(user.name, "user name property should be a non-empty string")
      assert.ok(
        typeof user.dateOfBirth === "string",
        "user dateOfBirth property should be a non-empty string"
      )
    })
  })

  it("getUserBirthDate function returns DateOfBirth in UNIX form", () => {
    userData1.forEach(user => {
      assert.ok(
        Date.parse(user.dateOfBirth) === getUserBirthDate(user) , "The function getUserBirthDate does not parse the string"
      )
    })
  })
})

