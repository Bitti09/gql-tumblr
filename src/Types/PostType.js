const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
  GraphQLBoolean,
  GraphQLFloat
} = require("graphql");

const TrailType = require('./TrailType');
const PhotoType = require('./PhotoType');
const PostReblogType = require('./PostReblogType');
const NotesType = require('./NotesType');

module.exports = new GraphQLObjectType({
	name: "Post",
	description: "Information about a Tumblr post.",
	fields: () => ({
		display_avatar: {
			type: GraphQLBoolean,
			description: "If true, this post display's the owner's avatar.",
		},
		can_reply: {
			type: GraphQLBoolean,
			description: "If true, this post can be replied to.",
		},
		can_send_in_message: {
			type: GraphQLBoolean,
			description: "If true, this post can be sent in a message.",
		},
		can_reblog: {
			type: GraphQLBoolean,
			description: "If true, this post can be reblogged.",
		},
		can_like: {
			type: GraphQLBoolean,
			description: "If true, this post can be liked.",
		},
		photos: {
			type: GraphQLList(PhotoType),
			defaultValue:"jarda",
			description: "List of photos that this post contains.",
		},
		image_permalink: {
			type: GraphQLString,
			description: "Base URL where this post's image(s) are hosted.",
		},
		link_url: {
			type: GraphQLString,
			description: "URL that this post links to.",
		},
		video_url: {
			type: GraphQLString,
			description: "This video's URL.",
		},
		video_type: {
			type: GraphQLString,
			description: "This video_type",
		},
		permalink_url: {
			type: GraphQLString,
			description: "This permalink_url",
		},
		thumbnail_url: {
			type: GraphQLString,
			description: "This video's thumbnail URL.",
		},
		trail: {
			type: GraphQLList(TrailType),
			description: "List of post's reblogs beginning with the initial poster.",
		},
		notes: {
			type: GraphQLList(NotesType),
			description: "Notes information on this post.",
		},
		reblog: {
			type: PostReblogType,
			description: "Reblog information on this post.",
		},
		reblogged_root_id: {
			type: GraphQLString,
			description: "reblogged_root_id information on this post.",
		},
		reblogged_root_name: {
			type: GraphQLString,
			description: "reblogged_root_name information on this post.",
		},
		caption: {
			type: GraphQLString,
			description: "This post's caption.",
		},
		source_title: {
			type: GraphQLString,
			description: "Title of the blog that made this post.",
		},
		source_url: {
			type: GraphQLString,
			description: "Direct URL to this post.",
		},
		note_count: {
			type: GraphQLInt
		},
		liked: {
			type: GraphQLBoolean,
			description: "If true, querying user likes this post.",
		},
		followed: {
			type: GraphQLBoolean,
			description: "If true, querying user follows the blog that made this post.",
		},
		// recommended_color: {
		// 	type: GraphQLObjectType
		// },
		// recommended_source: {
		// 	type: GraphQLObjectType
		// },
		is_blocks_post_format: {
			type: GraphQLBoolean
		},
		summary: {
			type: GraphQLString,
			description: "Summary text this post, if available.",
		},
		short_url: {
			type: GraphQLString,
			description: "Short URL linking to this post.",
		},
		tags: {
			type: GraphQLList(GraphQLString),
			description: "List of this post's tags.",
		},
		reblog_key: {
			type: GraphQLString,
			description: "This post's reblog key.",
		},
		format: {
			type: GraphQLString,
			description: "This post's format.",
		},
		state: {
			type: GraphQLString,
			description: "This post's current state.",
		},
		timestamp: {
			type: GraphQLInt,
			description: "This post's timestamp.",
		},
		date: {
			type: GraphQLString,
			description: "The GMT date and time of this post.",
		},
		slug: {
			type: GraphQLString,
			description: "Identifying text at the end of 'post_url', if present, for this post.",
		},
		post_url: {
			type: GraphQLString,
			description: "Direct URL to this post.",
		},
		id: {
			type: GraphQLFloat,
			description: "This post's unique Tumblr ID.",
		},
		blog_name: {
			type: GraphQLString,
			description: "The name of blog that made this post.",
		},
		type: {
			type: GraphQLString,
			description: "This post's media type.",
		}
	})
});
