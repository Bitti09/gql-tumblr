const {
    GraphQLObjectType,
} = require('graphql');

/**
 * Query object for use when only an API key is present, and not full OAuth1.0a authentication
 * @param {tumblr.Client} client tumblr.js client
 */
module.exports = client => new GraphQLObjectType({
    name: "Query_API_Key_Only",
    description: 'Your query options will be limited until full OAuth1.0a authentication is provided.',
    fields: () => ({
        ...require('../Templates/APIKeyOnlyQueryFields')(client), // Contains query parameters accessible with only an API key
    }),
});
