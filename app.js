const express = require('express')
const app = express()

const port = 8080

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/desks', (req, res) => {
    let lendable = {
        'Floor 1': {
          'Desk 1': {
              'status': 'free',
              'occupant': null
          },
          'Desk 2': {
              'status': 'reserved',
              'occupant': 'Luis'
          },
          'Desk 3': {
              'status': 'pending',
              'occupant': 'Alex'
          }
        },
        'Floor 2': {
          'Desk 1': {
              'status': 'free',
              'occupant': null
          },
          'Desk 2': {
              'status': 'reserved',
              'occupant': 'Filip'
          },
          'Desk 3': {
              'status': 'pending',
              'occupant': 'Ben'
          }
        },
      }

    res.send(lendable)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
