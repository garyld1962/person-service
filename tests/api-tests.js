var chakram = require('chakram'),
  expect = chakram.expect

describe('Add Person', function () {
  it('should be able to add a person', function () {
    return chakram
      .post(
        'https://22w47dfnge.execute-api.us-east-1.amazonaws.com/dev/person',
      {
        name: {
          title: 'mr',
          first: 'carter',
          last: 'hamilton'
        },
        location: {
          street: '3287 london road',
          city: 'liverpool',
          state: 'cornwall',
          postcode: 'Y74 8JQ',
          coordinates: {
            latitude: '14.1495',
            longitude: '-77.4964'
          },
          timezone: {
            offset: '0:00',
            description: 'Western Europe Time, London, Lisbon, Casablanca'
          }
        },
        email: 'carter.hamilton@gmail.com',
        phone: '0101 234 7685',
        cell: '0704-110-445'
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      .then(function (response) {
        return expect(response).to.have.status(200)
      })
  })
})

describe('Get A Person', function () {
  it('should update a person', function () {
    var response = chakram.get(
      'https://22w47dfnge.execute-api.us-east-1.amazonaws.com/dev/person/carter.hamilton%40gmail.com'
    )
    expect(response).to.have.json('item.email', 'carter.hamilton@gmail.com')
    return expect(response).to.have.status(200)
  })
})
describe('Get A List Of Persons', function () {
  it('should update a person', function () {
    var response = chakram.get(
      'https://22w47dfnge.execute-api.us-east-1.amazonaws.com/dev/persons'
    )
    expect(response).to.have.json('item[0].email', 'carter.hamilton@gmail.com')
    return expect(response).to.have.status(200)
  })
})
describe('Update A Person', function () {
  it('should be able to update a person', function () {
    return chakram
      .post(
        'https://22w47dfnge.execute-api.us-east-1.amazonaws.com/dev/person',
      {
        name: {
          title: 'mr',
          first: 'carter',
          last: 'hamilton'
        },
        location: {
          street: '3287 london road',
          city: 'liverpool',
          state: 'cornwall',
          postcode: 'Y74 8JQ',
          coordinates: {
            latitude: '14.1495',
            longitude: '-77.4964'
          },
          timezone: {
            offset: '0:00',
            description: 'Western Europe Time, London, Lisbon, Casablanca'
          }
        },
        email: 'carter.hamilton@gmail.com',
        phone: '9545313738',
        cell: '0704-110-445'
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      .then(function (response) {
        var getResponse = chakram
          .get(
            'https://22w47dfnge.execute-api.us-east-1.amazonaws.com/dev/person/carter.hamilton%40gmail.com'
          )
          .then(function (getResponse) {
            expect(getResponse).to.have.json('item.phone', '9545313738')
          })
      })
  })
})

describe('Delete A Person', function () {
  it('should delete a person', function () {
    var response = chakram.delete(
      'https://22w47dfnge.execute-api.us-east-1.amazonaws.com/dev/person/carter.hamilton%40gmail.com'
    )
    return expect(response).to.have.json('message', 'The person was deleted')
  })
})
