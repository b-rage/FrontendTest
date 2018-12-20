const logic = require('./src/logic')
const { expect } = require('chai')


// running test from CLI
// normal -> $ mocha logic.spec.js --timeout 10000
// debug -> $ mocha debug logic.spec.js --timeout 10000

describe('logic', () => {
    describe('search for username', () => {
      it('should succeed on valid username', async () => {
        const query = 'b-rage'
  
        const userData = await logic.findUser(query)
        expect(userData.login).to.equal(query)
        expect(userData.name).to.equal('Gianluca')
        expect(userData.bio).to.equal(null)
      })
    })
  
    describe('search of user repositories', () => {
      it('should succeed on valid username', async () => {
        const username = 'b-rage'
  
        const reps = await logic.findUserReps(username)
        expect(reps.length).to.equal(15)
        const [repo1] = reps
  
        expect(repo1.name).to.equal('esercizi-di-programmazione-javascript')
        expect(repo1.stargazers_count).to.equal(0)
        expect(repo1.forks_count).to.equal(0)

      })
    })
  })