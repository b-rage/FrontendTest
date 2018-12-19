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
    
      it('should fail on undefined username', () => {
        expect(() => logic.findUser(undefined)).to.throw(TypeError, 'undefined is not a string')
      })
      it('should fail on null username', () => {
        expect(() => logic.findUser(null)).to.throw(TypeError, 'null is not a string')
      })
      it('should numeric on null username', () => {
        expect(() => logic.findUser(567)).to.throw(TypeError, '567 is not a string')
      })
      it('should fail on empty username', () => {
        expect(() => logic.findUser('')).to.throw(Error, 'query is empty or blank')
      })
      it('should fail on blank username', () => {
        expect(() => logic.findUser(' ')).to.throw(Error,'query is empty or blank')
      })
    })
  
    describe('search of github repositories', () => {
      it('should succeed on valid username', async () => {
        const query = 'seand52'
  
        const repositories = await logic.searchRepositories(query)
        expect(repositories.length).to.equal(7)
        const [
          repository1,
          repository2,
          repository3,
          repository4,
          repository5,
          repository6,
          repository7
        ] = repositories
  
        expect(repository1.name).to.equal('33-js-concepts')
        expect(repository1.stargazers_count).to.equal(0)
        expect(repository1.forks_count).to.equal(0)
  
        expect(repository2.name).to.equal('document_cluster')
        expect(repository2.stargazers_count).to.equal(0)
        expect(repository2.forks_count).to.equal(0)
  
        expect(repository3.name).to.equal('freeCodeCamp')
        expect(repository3.stargazers_count).to.equal(0)
        expect(repository3.forks_count).to.equal(0)
  
        expect(repository4.name).to.equal('FrontendTest')
        expect(repository4.stargazers_count).to.equal(0)
        expect(repository4.forks_count).to.equal(0)
  
        expect(repository5.name).to.equal('kanban-app')
        expect(repository5.stargazers_count).to.equal(0)
        expect(repository5.forks_count).to.equal(0)
  
        expect(repository6.name).to.equal('skylab-bootcamp-201809')
        expect(repository6.stargazers_count).to.equal(0)
        expect(repository6.forks_count).to.equal(0)
  
        expect(repository7.name).to.equal('socialDev')
        expect(repository7.stargazers_count).to.equal(0)
        expect(repository7.forks_count).to.equal(0)
      })
  
      it('should throw error on non-existant username', async () => {
        const query = 'mfosefwoiwj'
        let errorMessage= null
        await logic.searchRepositories(query).catch(err => errorMessage = err.message)
        expect(errorMessage).to.equal(`User ${query} was not found`)
      })
  
      it('should fail on undefined username', () => {
        expect(() => logic.searchRepositories(undefined)).to.throw(
          TypeError,
          'undefined is not a string',
        )
      })
      it('should fail on null username', () => {
        expect(() => logic.searchRepositories(null)).to.throw(TypeError, 'null is not a string')
      })
      it('should numeric on null username', () => {
        expect(() => logic.searchRepositories(7)).to.throw(TypeError, '7 is not a string')
      })
      it('should fail on empty username', () => {
        expect(() => logic.searchRepositories('')).to.throw(Error, 'query is empty or blank')
      })
      it('should fail on blank username', () => {
        expect(() => logic.searchRepositories('          \n        ')).to.throw(
          Error,
          'query is empty or blank',
        )
      })
    })
  })