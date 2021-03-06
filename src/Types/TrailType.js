const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
  GraphQLBoolean,
  GraphQLFloat
} = require("graphql");

const BlogType = require('./BlogType');

/**
 * Contains reblog history of a post (Begins with first post)
 */
module.exports = new GraphQLObjectType({
    name: 'Trail',
    description: "Contains reblog history of a post. (Begins with first post)",
    fields: () => ({
        is_root_item: {
          type: GraphQLBoolean,
          description: "If true, this post is the initial post.",
        },
        is_current_item: {
          type: GraphQLBoolean
        },
        content: {
          type: GraphQLString,
          description: "Raw text content of post.",
        },
        content_raw: {
          type: GraphQLString,
          description: "HTML content of post.",
        },
        blog: {
          type: BlogType,
          description: "Information on the blog who made the post.",
        },
        //API actually returns an object for this... Could be more complex?
        post_id: {
          type: GraphQLFloat,
          description: "ID of post.",
          resolve: trail => trail.post.id,
        },
    })
});
