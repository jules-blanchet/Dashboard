const mongoose = require('mongoose');
const Service = require('./Service');

const widgetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    parameters: [{
        type: String,
        required: false,
    }],
    token: {
        type: String,
        required: false
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    }
});

widgetSchema.pre('save', async function (next) {
    next()
});

widgetSchema.statics.getAllWidgets = async () => {
    return Widget.find({});
};

widgetSchema.statics.getOneWidget = async (id) => {
    let widget = null;
    await Widget.findById(id, function (err, res) {
        if (err) {
            return null
        }
        widget = res;
    });
    return widget
};

widgetSchema.statics.deleteAllByService = async (id_service) => {
    await Widget.deleteMany({ services: id_service }, function (err) {
        if (err)
            return null
    });
    return "OK"
};

widgetSchema.statics.deleteOneById = async (id_widget) => {
    await Widget.deleteOne({ _id: id_widget }, function (err) {
        if (err)
            return null
    });
    return "OK"
};

const Widget = mongoose.model('Widget', widgetSchema);

module.exports = Widget;
