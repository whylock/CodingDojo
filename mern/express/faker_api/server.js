const express = require('express')
const faker = require('faker')
const { create } = require('domain')
const app = express()
const port = 8000


class User {
    constructor() {
        this._id = faker.random.number()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor() {
        this._id = faker.random.number()
        this.name = faker.company.companyName()
        this.address = faker.address.streetAddress()
    }
}

const createUser = new User()
console.log(createUser)

const createCompany = new Company()
console.log(createCompany)


const server = app.listen(8000, () =>
    console.log(`RUNNING on ${server.address().port}`)
)

app.get('api/:user/:new', (req, res) => {
    res.send(`User:${createUser.firstName}`)
})

app.get('api/companies/new', (req, res) => {
    res.send(`Company:${createCompany.name}`)
})

app.get('api/user/company', (req, res) => {
    res.send(`User:${createUser.firstName}`)
    res.send(`Company:${createCompany.name}`)
})