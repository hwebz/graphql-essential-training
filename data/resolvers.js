import { reject } from 'lodash';
import { Widgets } from './dbConnectors';

const resolvers = {
    getProduct: ({ id }) => {
        return new Promise((resolve) => {
            Widgets.findById({ _id: id }, (err, product) => {
                if (err) reject(err)
                else resolve(product);
            })
        });
    },
    createProduct: ({ input }) => {
        
    }
}

export default resolvers;