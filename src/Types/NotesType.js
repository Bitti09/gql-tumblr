const {
	GraphQLObjectType,
	GraphQLString,
} = require("graphql");

module.exports = new GraphQLObjectType({
    name: 'NotesType',
    description: 'Notes information',
    fields: () => ({
      type: {
        type: GraphQLString,
      },
      timestamp: {
        type: GraphQLString,
      },
      blog_name: {
        type: GraphQLString,
      },
      followed: {
        type: GraphQLString,
      },
      blog_uuid: {
        type: GraphQLString,
      }
    })
});
