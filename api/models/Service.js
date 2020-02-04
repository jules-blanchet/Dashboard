const mongoose = require('mongoose');
const Widget = require('./Widget');
const User = require('./User');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    widgets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Widget',
        required: false
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

serviceSchema.pre('save', async function (next) {
    next()
});

serviceSchema.statics.getAllServices = async () => {
    return Service.find({});
};

serviceSchema.statics.findInDatabase = async (findObj) => {
    return Service.find(findObj);
};

serviceSchema.statics.getAllServicesUser = async (user) => {
    return Service.find({user: user._id});
};

serviceSchema.statics.getOneServiceById = async function(id) {
    let service = null;
    await Service.findById(id, function (err, res) {
        if (err) {
            return null
        }
        service = res
    });
    return service
};

serviceSchema.statics.getOneServiceByName = async function(name, userId) {
    let service = null;
    await Service.find({name: name, user: userId}, function (err, res) {
        if (err || res.length === 0) {
            return null
        }
        service = res
    });
    return service
};

serviceSchema.statics.getOneServiceByUser = async function(user_id) {
    let service = null;
    await Service.find({user: user_id}, function (err, res) {
        if (err) {
            return null
        }
        service = res
    });
    return service
};

serviceSchema.methods.addWidgetToService = async function(id_widget) {
    const service = this;
    if (!service.widgets.includes(id_widget)) {
        service.widgets.push(id_widget);
        await service.save();
    }
};

serviceSchema.methods.deleteOneWidget = async function(id_widget) {
    const service = this;
    if (service.widgets.includes(id_widget)) {
        for(let i = 0; i < service.widgets.length; i++){
            if (String(service.widgets[i]) === String(id_widget)) {
                service.widgets.splice(i, 1);
            }
        }
        await service.save();
    }
};

serviceSchema.statics.deleteOneById = async (id) => {
    await Service.deleteOne({ _id: id }, function (err) {
        if (err)
            return null
    });
    return "OK"
};

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
