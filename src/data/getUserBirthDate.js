module.exports = function(user) {
    // TODO: Implement me
    if ("birthday" in user){
        return user.birthday
    }
    return Date.parse(user.dateOfBirth)
}