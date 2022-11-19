import mongoose from 'mongoose';
import { Sequelize, DataTypes } from 'sequelize';
import _ from "lodash";
import casual from "casual";

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

const sequalize = new Sequelize('sqlite::memory');

const Categories = sequalize.define('categories', {
    category: DataTypes.STRING,
    description: DataTypes.STRING
});

// Only run this 1 time
// Categories.sync({ force: true }).then(() => {
//     _.times(5, (i) => {
//         Categories.create({
//             category: casual.word,
//             description: casual.sentence,
//         })
//     })
// })

export {
    Widgets,
    Categories
};