## config environment in env.json
```
{
    "default": {
        "PORT": "3000",
        "JWT_KEY": "secret",
        "DB_HOST": "192.168.99.100",
        "DB_PORT": "27017",
        "DB_DATABASE": "pizza-creator-api-default",
        "DB_PASSWORD": "",
        "DB_USER": ""
    },
    "dev": {
        "JWT_KEY": "secret",
        "DB_HOST": "192.168.99.100",
        "DB_PORT": "27017",
        "DB_DATABASE": "pizza-creator-api",
        "DB_PASSWORD": "",
        "DB_USER": ""
    },
    "test": {
        "JWT_KEY": "secret",
        "DB_HOST": "192.168.99.100",
        "DB_PORT": "27017",
        "DB_DATABASE": "pizza-creator-api-test",
        "DB_PASSWORD": "",
        "DB_USER": ""
    },
    "prod": {
        "JWT_KEY": "secret",
        "DB_HOST": "ds151463.mlab.com",
        "DB_PORT": "51463",
        "DB_DATABASE": "pigeon",
        "DB_PASSWORD": "user01",
        "DB_USER": "user01"
    }
}
```

## E-R maps
![ER](https://raw.githubusercontent.com/jiangren-mel-fullstack-1907/pizza-creator-api/master/pizza-creator-er.jpg)


## Swagger editor url: /api-docs

## How to run

Local dev
* setup mongodb on local machine
* change the dev part of env.json
* start the server
``` bash
    npm run dev
```

Heroku hosting: The project would be deployed to the heroku server by heroku CI/CD. The url swagger UI is [Heroku swagger UI](https://pizza-creator-api-expressjs.herokuapp.com/api-docs)

## How to create an order in prod env

### Create a topping
* api end point
``` bash
Post /api/toppings
```

* payload
``` javascript
{
  "name": "cheese",
  "description": "a piece of cheese",
  "price": 0.2,
  "icon": "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/cheese-wedge.png"
}
```

### Create a pizzaSize
* api end point
``` bash
Post /api/pizzaSizes
```

* payload
``` javascript
{
  "name": "small",
  "description": "4 inches",
  "price": 2.1,
  "icon": "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/pizza-hut-pizza-crust.jpg"
}
```

### Create a user
* api end point
``` bash
Post /api/users
```

* payload
``` javascript
{
  "name": "user01",
  "password": "user01",
  "email": "user01@gmail.com",
  "address": "23 back street",
  "phone": "042523442"
}
```

### Create an order
* api end point
``` bash
Post /api/orders
```

* payload
```
{
  "pizzaSize": "5d8ac305a4314200c77f1cc9",
  "customer": "5d8ac3efa4314200c77f1cca",
  "orderItems": [
    {
      "topping": "5d8ac24ea4314200c77f1cc8",
      "quantity": 2
    }
  ],
  "totalPrice": 4.3
}
```

### Get orders
* api end point
``` bash
Get /api/orders
```

* response
``` javascript

    {
        "_id": "5d8ac459a4314200c77f1ccb",
        "pizzaSize": {
            "_id": "5d8ac305a4314200c77f1cc9",
            "name": "small",
            "description": "4 inches",
            "price": 2.1,
            "icon": "https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/pizza-hut-pizza-crust.jpg"
        },
        "customer": {
            "_id": "5d8ac3efa4314200c77f1cca",
            "name": "user01",
            "email": "user01@gmail.com",
            "address": "23 back street"
        },
        "orderItems": [
            {
                "_id": "5d8ac459a4314200c77f1ccc",
                "topping": {
                    "_id": "5d8ac24ea4314200c77f1cc8",
                    "name": "cheese",
                    "description": "a piece of cheese",
                    "price": 0.2,
                    "icon": "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/cheese-wedge.png"
                },
                "quantity": 2
            }
        ],
        "totalPrice": 4.3,
        "createdAt": "2019-09-25T01:35:21.378Z",
        "updatedAt": "2019-09-25T01:35:21.378Z",
        "__v": 0
    }
```