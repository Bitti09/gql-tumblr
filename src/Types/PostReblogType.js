const {
	GraphQLObjectType,
	GraphQLString,
} = require("graphql");

module.exports = new GraphQLObjectType({
    name: 'PostReblogType',
    description: 'Post reblogging information',
    fields: () => ({
      tree_html: {
        type: GraphQLString,
      },
      comment: {
        type: GraphQLString,
      }
    })
});
