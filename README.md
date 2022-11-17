# GraphQL Essential Training

> npm init

> npm i express express-graphql graphql nodemon

> npm i --save-dev @babel/cli @babel/core @babel/node @babel/preset-env


## To create a new product
```
mutation {
  createProduct(input:{
    name: "widget",
    description: "Another widget for your garden",
    price: 37.79,
    soldout: false,
    stores: [
      {
        store: "First store"
      },
      {
        store: "Second store"
      }
    ]
  }){
    price
    name
  }
}
```