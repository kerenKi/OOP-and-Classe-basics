const assert = require("assert")
const userData = require("./users")

describe("users data", function() {
  it("is complete/valid", () => {
    userData.forEach(user => {
      assert.ok(user.name, "user name property should be a non-empty string")
      assert.ok(
        user.dateOfBirth,
        "user dateOfBirth property should be a non-empty string"
      )
    })
  })
})
