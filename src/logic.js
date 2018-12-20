//const fetch = require("node-fetch") //for test

export const logic = {

        /**
     * 
     * @param {String} query user to search
     * 
     * @throws {TypeError} non-string query
     * @throws {Error} query empty or blank
     * 
     * @returns {Promise} user Info
     *  
     */

    async findUser(query) {

        if (typeof query !== "string") throw TypeError(query + " is not a string")
        if (!query.trim().length) throw Error("query is empty or blank")

        const uri = `https://api.github.com/users/${query}`
        const response = await fetch(uri)
        const data = await response.json()
        return data
            
    },

        /**
     * 
     * @param {String} username user to search
     * 
     * @throws {TypeError} non-string username
     * @throws {Error} username empty or blank
     * 
     * @returns {Promise} user repos list
     *  
     */

    async findUserReps(username) {

        if (typeof username !== "string") throw TypeError(username + " is not a string");
        if (!username.trim().length) throw Error("username is empty or blank")

        const uri = `https://api.github.com/users/${username}/repos`
        const response = await fetch(uri)
        const data = await response.json()
        return data

    }
}


// module.exports = logic //for test
