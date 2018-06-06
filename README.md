# gql-tumblr
A GraphQL wrapper for Tumblr's API
Based on  [graphql-tumblr](https://github.com/JEstes93/graphql-tumblr)   by JEstes93  with some adddons.
### Dependencies:

* [graphql-js](https://github.com/graphql/graphql-js) - a JavaScript GraphQL runtime.
* [tumblr.js](https://github.com/tumblr/tumblr.js) - a JavaScript client for the Tumblr API.

### Recommended additional packages:

* [express](https://github.com/expressjs/express) - a Fast, unopinionated, minimalist web framework for node.
* [express-graphql](https://github.com/graphql/express-graphql) - Create a GraphQL HTTP server with Express.
* [body-parser](https://github.com/expressjs/body-parser) - a Node.js body parsing middleware.

## Installation

Install package with:

```sh
npm install graphql-tumblr
```
or
```sh
yarn add graphql-tumblr
```

## Usage

The module returns a function which initializes Tumblr API access with a consumer/app API key and secret.

```js
const wrapper = require('graphql-tumblr')({
    consumer_key: "<your app's API key>",
    consumer_secret: "<your app's API secret>",
});
```

This returns an object containing two GraphQLSchemas. One is a limited schema, which excludes all endpoints which require OAuth1.0a authentication:

```js
const LimitedSchema = require('graphql-tumblr')({
    consumer_key: "<your app's API key>",
    consumer_secret: "<your app's API secret>",
}).Schemas.API_Only;
```

The other is a function returning a schema covering all current Tumblr API endpoints. These extra endpoints require a valid OAuth1.0a access token and secret to function correctly. These should be passed as an object, like this:

```js
const FullSchema = require('graphql-tumblr')({
    consumer_key: "<your app's API key>",
    consumer_secret: "<your app's API secret>",
}).Schemas.Full({
    token: "<a client's OAuth1.0a access token>",
    token_secret: "<a client's OAuth1.0a access token secret>",
});
```

## Example Usage with express/express-graphql

```js
const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

const LimitedSchema = require('graphql-tumblr')({
    consumer_key: "<your app's API key>",
    consumer_secret: "<your app's API secret>",
}).Schemas.API_Only;

app.use('/graphql', graphqlHTTP({
    schema: LimitedSchema,
    graphiql: true
}));

app.listen(4000); 
// GraphiQL UI should now be available at: http://localhost:4000/graphql
```