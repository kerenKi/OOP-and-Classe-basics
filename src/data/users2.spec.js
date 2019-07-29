const assert = require('assert')
const userData2 = require('./users2').data
const getUserBirthDate = require('./users2').getUserBirthDate

describe("users2 data and function are complete/valid", function(){
  it("Data is complete", () => {
    userData2.forEach( user => {
      assert.ok(user.name, "user name property should be a non-empty string")
      assert.ok(user.birthday && typeof user.birthday === "number", "user birthday property should be a non-zero number" )
    })
  })

  it("getUserBirthDate function returns user birthday", () => {
    userData2.forEach( user => {
      assert.ok(
        user.birthday === getUserBirthDate(user), "function getUserBirthDate shuold return the user birthday "
      )
    })
  })  
})


