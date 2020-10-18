const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLList,
    GraphQLString,
} = require('graphql');

const {
    BlogType,
    BlogLikesType,
    BlogPostsType,
    PostType,
} = require('../Core/CoreTypes');

/**
 * Returns query fields available with only an API key, and not full OAuth1.0a authentication
 * @param {tumblr.Client} client tumblr.js client to use for API interaction
 */
module.exports = client => ({
    BlogInfo: {
        type: BlogType,
        description: 'Returns public info about any blog by name.',
        args: {
            blog_name: {
                type: GraphQLString,
                description: "The blog name to search. (Must be full tumblr address)",
            },
        },
        resolve: (root, args) => client.blogInfo(args.blog_name).then(d => d.blog),
    },
    BlogLikes: {
        type: BlogLikesType,
        description: 'Returns public liked posts from this blog',
        args: {
            blog_name: {
                type: GraphQLString,
                description: "The blog name to search. (Must be full tumblr address)",
            },
            limit: {
                type: GraphQLInt,
                description: "The number of posts to return. (1-20, inclusive, default is 20)"
            },
            num: {
                type: GraphQLInt,
                description: "The number to use with if a method is specified (Required if method is set)" +
                "\n - offset: Liked post number to start at.\n - before: Timestamp to retrieve liked posts BEFORE." +
                "\n - after: Timestamp to retrieve liked posts AFTER.",
            },
            method: {
                type: GraphQLString,
                description: "Method with which to filter liked posts. (Defaults to return all posts)\nValid settings:\n - offset\n - before\n - after",
            },
        },
        resolve: (root, args) => client.blogLikes(args.blog_name, { ...args, [args.method]: args.num, }),
    },
    BlogPosts: {
        type: BlogPostsType,
        description: 'Returns public liked posts from this blog',
        args: {
            blog_name: {
                type: GraphQLString,
                description: "The blog name to search. (Must be full tumblr address)",
            },
            tag: {
                type: GraphQLString,
                description: "If set, only return posts that have the specified tag. (Defaults to return any/all tags)",
            },
            limit: {
                type: GraphQLInt,
                description: "The number of posts to return. (1-20, inclusive, default is 20)"
            },
            offset: {
                type: GraphQLInt,
                description: "The post number to start at. (Defaults to 0)"
            },
            type: {
                type: GraphQLString,
                description: "If set, only returns posts of a matching type.\n" +
                    "(Must be one of the following: text, photo, quote, link, chat, audio, video, or answer. Defaults to None, returns all post types)"
            },
            filter: {
                type: GraphQLString,
                description: "If set, only returns posts of a specified type.\n" +
                "(Returns all posts by default. Valid types: html, text, or raw)",
            },
            id: {
                type: GraphQLFloat,
                description: "Specific post ID to return. If set, only returns a single post.",
            },
            id_string: {
                type: GraphQLString,
                description: "Specific post ID to return. If set, only returns a single post1.",
            },
            reblog_info: {
                type: GraphQLBoolean,
                description: "If true, query returns reblog information.",
            },
            notes_info: {
                type: GraphQLBoolean,
                description: "If true, query returns notes information.",
            },
        },
        resolve: (root, args) => client.blogPosts(args.blog_name, { ...args, 'id': args.id_string, }),
    },
    TaggedPosts: {
        type: GraphQLList(PostType),
        description: 'Returns public liked posts with a certain tag',
        args: {
            tag: {
                type: GraphQLString,
                description: "If set, only return posts that have the specified tag. (Defaults to return all posts)",
            },
            limit: {
                type: GraphQLInt,
                description: "The number of posts to return. (1-20, inclusive, default is 20)",
            },
            before: {
                type: GraphQLInt,
                description: "Timestamp to see posts before. (Defaults to return all posts)",
            },
            filter: {
                type: GraphQLString,
                description: "If set, only returns posts of a specified type.\n" +
                "(Returns all posts by default. Valid types: html, text, or raw)",
            },
        },
        resolve: (root, args) => client.taggedPosts(args.tag, { ...args, }),
    },
});
