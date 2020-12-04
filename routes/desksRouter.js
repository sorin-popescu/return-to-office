const express = require('express');

function routes(Desk) {
    const desksRouter = express.Router();
    desksRouter.route('/desks')
        .post((req, res) => {
            const desk = new Desk(req.body);
            console.log(req.body);
            desk.save();

            return res.status(201).json(desk);
        })

        .get((req, res) => {
            const query = {};
            if (req.query.name) {
                query.name = req.query.name;
            }
            Desk.find(query, (err, desks) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(desks);
            });
        })

    desksRouter.route('/desks/:deskId')
        .get((req, res) => {
            Desk.findById(req.params.deskId, (err, desk) => {
                if (err) {
                    return res.send(err);
                }
                return res.json(desk);
            });
        });

    return desksRouter;
}

module.exports = routes;