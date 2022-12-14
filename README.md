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
    soldout: ONSALE,
    inventory: 21,
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
    id
    inventory
  }
}

mutation {
  updateProduct(input:{
    id: "<product_id>",
    name: "widget 3",
    description: "Another widget for your garden 3",
    price: 37.79,
    soldout: ONSALE,
    inventory: 21,
    stores: [
      {
        store: "First store"
      }
    ]
  }){
    price
    name
    id
    inventory
  }
}

mutation {
  deleteProduct(id: "<product_id>")
}
```

```
query {
  getProduct(id:<widget_id>){
    name
    description
    price
    soldout
    inventory
  }
}
query {
  getAllProducts {
    id
    name
    description
    price
    soldout
    inventory
  }
}
```

Querying with aliases
```
query {
  price:getProduct(id:"<product_id>") {
    price
    description
  }
  description:getProduct(id:"<product_id>") {
    price
    description
  }
} 	
```

Querying with fragments
```
query {
  widget1:getProduct(id:"<product_id>") {
    ...widgetFragment
  }
  widget2:getProduct(id:"<product_id>") {
    ...widgetFragment
  }
} 	

fragment widgetFragment on Product {
  name
  price
  description
  soldout
}
```

## Create DB connectors

> npm i mongoose sequelize sqlite3 casual lodash