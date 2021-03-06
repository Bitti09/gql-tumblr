const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
  GraphQLBoolean,
  GraphQLFloat
} = require("graphql");

const UserInfoBlogsType = require('./UserInfoBlogsType');

/**
 * Information about the querying user
 */
module.exports = new GraphQLObjectType({
	name: "UserInfo",
	description: "Information about the querying user.",
	fields: () => ({
		name: {
			type: GraphQLString,
			description: "This user's Tumblr name.",
			resolve: user => user.name
		},
		likes: {
			type: GraphQLInt,
			description: "Total number of posts this user likes.",
			resolve: user => user.likes
		},
		following: {
			type: GraphQLInt,
			description: "Total number of blogs this user is following.",
			resolve: user => user.following
		},
		defaultPostFormat: {
			type: GraphQLString,
			description: "This user's default posting format.",
			resolve: user => user.default_post_format
		},
		blogs: {
			type: GraphQLList(UserInfoBlogsType),
			description: "List of all blogs that this user has permissions to post to.",
			resolve: user => user.blogs
		}
	})
});
