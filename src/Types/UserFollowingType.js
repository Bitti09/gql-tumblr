const {
  GraphQLObjectType,
  GraphQLList,
	GraphQLInt,
	GraphQLString,
} = require("graphql");

const BlogSimpleType = require('./BlogSimpleType');

/**
 * List of blogs the authenticated user is following
 */
module.exports = new GraphQLObjectType({
    name: 'UserFollowing',
    description: 'Returns list of blogs that authenticated user is following.',
    fields: () => ({
      blogs: {
        type: GraphQLList(BlogSimpleType)
      },
      total_blogs: {
        type: GraphQLInt
      }
    })
});
