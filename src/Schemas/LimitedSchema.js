
const {
	GraphQLSchema
} = require("graphql");

module.exports = client => new GraphQLSchema({
    query: require('../Queries/LimitedQuery')(client),
});
