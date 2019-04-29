const User = require('./userClass')

class UserWithBirthday extends User {
  constructor(name,birthday) {
    super(name)
    this.dateOfBirth = birthday
  }
  getBirthday() {
    return Date.parse(this.dateOfBirth)
  }
}

module.exports.data = [
  new UserWithBirthday("Ava", "1990-04-01"),
  new UserWithBirthday("James", "1968-02-06"),
  new UserWithBirthday("Danielle", "1987-09-15"),
  new UserWithBirthday("Darnell", "1982-06-22")
]
