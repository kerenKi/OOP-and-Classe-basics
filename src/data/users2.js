
const User = require('./userClass')

class UserWithBirthday extends User {
  constructor(name, birthday) {
    super(name)
    this.birthday = birthday
  }
  getBirthday() {
    return this.birthday
  }
}

module.exports.data = [
  new UserWithBirthday("Ava", 638928000000),
  new UserWithBirthday("James", -60048000000),
  new UserWithBirthday("Danielle", 558662400000),
  new UserWithBirthday("Darnell", 393552000000)
]
