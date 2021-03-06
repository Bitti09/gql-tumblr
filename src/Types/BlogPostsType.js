const { GraphQLObjectType, GraphQLInt, GraphQLList } = require("graphql");
const PostType = require('./PostType');
const BlogSimpleType = require('./BlogSimpleType');

module.exports = new GraphQLObjectType({
	name: "BlogPosts",
	description: "Returns list of posts that this blog likes.",
	fields: () => ({
		blog: {
			type: BlogSimpleType,
			description: 'Information about this blog.',
		},
		posts: {
			type: GraphQLList(PostType),
			description: "List of this blog's posts.",
		},
		total_posts: {
			type: GraphQLInt,
			description: 'Number of posts this blog has posted.',
		}
	})
});
