function user(name,dateOfBirth){
  this.name = name
  this.dateOfBirth = dateOfBirth
  this.getBirthday = function() {
    return Date.parse(this.dateOfBirth)
  }
}


module.exports.data = [
  new user("Ava", "1990-04-01"),
  new user("James","1968-02-06"),
  new user("Danielle","1987-09-15"),
  new user("Darnell","1982-06-22"),
]
