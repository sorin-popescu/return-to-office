const express = require('express');

let response = {
    'Floor 1': {
        'Desk 1': {
            'status': 'reserved',
            'occupant': 'Sorin'
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
};

function routes() {
    const desksRouter = express.Router();
    desksRouter.route('/desks').get((req, res) => {
        res.json(response)
    });

    return desksRouter;
}

module.exports = routes;