module.exports = function(user) {
    if ("birthday" in user){
        return user.birthday
    }
    return Date.parse(user.dateOfBirth)
}