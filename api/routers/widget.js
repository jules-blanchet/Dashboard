const express = require('express');
const Widget = require('../models/Widget');
const auth = require('../middleware/auth');
const Service = require('../models/Service');

const router = express.Router();

router.post('/widgets', auth, async (req, res) => {
    // Create a new widget
    const widget = new Widget(req.body);
    await widget.save();
    try {
        await Service.getOneServiceById(widget.service).then(async (service) => {
            if (!service) {
                res.status(400).send({error: "no service found with this Id"})
            }
            await service.addWidgetToService(widget._id)
        }).catch((err) => {
            res.status(400).send({error: "no service found with this Id"})
        });
    } catch (e) {
        res.status(400).send({e})
    }
    res.status(201).send({ widget })
});

router.get('/widgets', auth, async (req, res) => {
    try {
        Widget.getAllWidgets().then((result) => {
            res.status(200).send(result)
        });
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get('/widgets/me', auth, async (req, res) => {
    try {
        let services = await Service.findInDatabase({user: req.user._id});
        let widgets = [];
        for (const service of services) {
            await Widget.find({service: service._id}, function (err, res) {
                if (err) {
                    res.status(401).send({err})
                }
                widgets = res.concat(widgets);
            });
        }
        res.status(200).send({widgets})
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get('/widgets/:id', auth, async (req, res) => {
    await Widget.getOneWidget(req.params.id).then((result) => {
        if (!result) {
            res.status(400).send({error: "no service found with this Id"})
        }
        res.status(200).send(result)
    }).catch((err) => {
        res.status(400).send({error: "no service found with this Id"})
    });
});

router.put('/widget/:id', auth, async (req, res) => {
    await Widget.getOneWidget(req.params.id).then(async (widget) => {
        if (!widget) {
            res.status(400).send({error: "no widget found with this Id"})
        }
        widget.update(req.body);
        await widget.save();
        res.status(200).send(widget)
    }).catch((err) => {
        res.status(400).send({error: "no widget found with this Id"})
    });
});

router.delete('/widget/:id', auth, async (req, res) => {
    try {
        let widget = await Widget.getOneWidget(req.params.id);
        let service = await Service.getOneServiceById(widget.service);
        await service.deleteOneWidget(req.params.id);
        await Widget.deleteOneById(req.params.id).then((result) => {
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
