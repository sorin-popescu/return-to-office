const express = require('express');

function routes(Floor) {
    const floorRouter = express.Router();
    floorRouter.route('/floors')
        .post((req, res) => {
            const floor = new Floor(req.body);
            console.log(req.body);
            floor.save();
            return res.status(201).json(floor);
        })

        .get((req, res) => {
            const query = {};
            if (req.query.name) {
                query.name = req.query.name;
            }
            Floor.find(query, (err, floors) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(floors);
            });
        })

    floorRouter.route('/floors/:floorNo')
        .get((req, res) => {
            const query = {};
            query.number = req.params.floorNo;

            Floor.find(query, (err, floor) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(floor);
            });
        });

    return floorRouter;
}

module.exports = routes;