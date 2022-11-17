import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

class Product {
    constructor(id, { name, description, price, soldout, stores }) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.soldout = soldout;
        this.stores = stores;
    }
}

const productDatabase = {};

const root = {
    product: () => {
        return {
            id: 28712341,
            name: "widget",
            description: "Beautiful widget to use in your garden",
            price: 34.99,
            soldout: false,
            stores: [
                {
                    store: "Panadesa"
                },
                {
                    store: "Los Angeles"
                }
            ]
        }
    },
    createProduct: ({ input }) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        productDatabase[id] = input;
        return new Product(id, input);
    }
};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8000, () => console.log('Running server on port localhost:8000/graphql'));