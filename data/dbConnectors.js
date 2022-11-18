import mongoose from 'mongoose';

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://hdevz:hdevz@cluster0.besxdb7.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const widgetSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    soldout: {
        type: String
    },
    inventory: {
        type: String
    },
    stores: {
        type: Array
    }
});

const Widgets = mongoose.model('widgets', widgetSchema);

export {
    Widgets
};