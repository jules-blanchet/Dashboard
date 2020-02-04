const express = require('express');
const Service = require('../models/Service');
const Widget = require('../models/Widget');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/services', auth, async (req, res) => {
    // Create a new service
    try {
        req.body.user = req.user._id;
        const service = new Service(req.body);
        await service.save();
        res.status(201).send({ service })
    } catch (error) {
        res.status(400).send(error)
    }
});

router.get('/services', auth, async (req, res) => {
    try {
        Service.getAllServices().then((result) => {
            res.status(200).send(result)
        });
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get('/services/me', auth, async (req, res) => {
    try {
        Service.getAllServicesUser(req.user).then((result) => {
            res.status(200).send(result)
        });
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get('/services/:id', auth, async (req, res) => {
    await Service.getOneServiceById(req.params.id).then((result) => {
        if (!result) {
            res.status(400).send({error: "no service found with this Id"})
        }
        res.status(200).send(result)
    }).catch((err) => {
        res.status(400).send({error: "no service found with this Id"})
    });
});

router.get('/services/name/:name', auth, async (req, res) => {
    await Service.getOneServiceByName(req.params.name, req.user._id).then((result) => {
        if (!result) {
            res.status(404).send({error: "no service found with this Name"})
        }
        res.status(200).send(result)
    }).catch((err) => {
        res.status(400).send({error: "no service found with this Name"})
    });
});

router.put('/service/:id', auth, async (req, res) => {
    await Service.getOneServiceById(req.params.id).then(async (service) => {
        if (!service) {
            res.status(400).send({error: "no service found with this Id"})
        }
        service.update(req.body);
        await service.save();
        res.status(200).send(service)
    }).catch((err) => {
        res.status(400).send({error: "no service found with this Id"})
    });
});

router.delete('/service/:id', auth, async (req, res) => {
    try {
        await Service.deleteOneById(req.params.id).then((result) => {
            if (!result) {
                res.status(400).send({error: "error with delete Service"})
            }
        });
        await Widget.deleteAllByService(req.params.id).then((result) => {
           if (!result) {
               res.status(400).send({error: "error with delete widgets"})
           }
           res.status(200).send({message: "deleted"})
        });
    } catch (err) {
        res.status(400).send(err)
    }
});

module.exports = router;
