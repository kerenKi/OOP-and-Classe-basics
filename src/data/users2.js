module.exports.data = [
  {
    name: "Ava",
    birthday: 638928000000,
    getBirthday: function(){
      console.log("get birthday function is running for " + this.name )
      return this.birthday
    }
  },
  {
    name: "James",
    birthday: -60048000000,
    getBirthday: function(){
      console.log("get birthday function is running for " + this.name )
      return this.birthday

    }
  },
  {
    name: "Danielle",
    birthday: 558662400000,
    getBirthday: function(){
      console.log("get birthday function is running for " + this.name )
      return this.birthday

    }
  },
  {
    name: "Darnell",
    birthday: 393552000000,
    getBirthday: function(){
      console.log("get birthday function is running for " + this.name )
      return this.birthday

    }
  }
]

module.exports.getUserBirthDate = function(user) {
  return user.birthday
}
