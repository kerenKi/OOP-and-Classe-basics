const assert = require("assert")
const getUserBirthday = require("./getUserBirthDate")
const userData1 = require("./data/users").data
const userData2 = require("./data/users2").data

describe("get user birthdate", function () {
    it("data 2 is in unix format", () => {
        userData2.forEach(user => {
            assert.ok(
                user.birthday === getUserBirthday(user),
                "getUserBirthday function does not return user birthday"
            )
        })
    })

    it("data 1 is parsed to unix format", () => {
        userData1.forEach(user => {
            assert.ok(
                Date.parse(user.dateOfBirth) === getUserBirthday(user),
                "getUserBirthday function does not return unix format birthday"
            )
        })
    })
})
