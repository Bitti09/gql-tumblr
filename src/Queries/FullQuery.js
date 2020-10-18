
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList,
    GraphQLFloat,
    GraphQLString,
} = require('graphql');

const {
    BlogType,
    BlogLikesType,
    BlogPostsType,
    PostType,
    UserInfoType,
    UserLikesType,
    UserFollowingType,
} = require('../Core/CoreTypes');

/**
 * Returns a query with full access to API
 * @param {tumblr.Client} client tumblr.js Client for API interaction
 */
module.exports = client => new GraphQLObjectType({
    name: "Query",
    description: 'Basis for queries against this dataset.',
    fields: {
        ...require('../Templates/APIKeyOnlyQueryFields')(client), //<--- Lesser, API key fields

        UserInfo: {
            type: UserInfoType,
            description: 'Returns info on the querying user.',
            resolve: root => client.userInfo().then(d => d.user)
        },
        Dashboard: {
            type: GraphQLList(PostType),
            description: 'Returns dashboard feed posts for the querying user.',
            args: {
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
                since_id: {
                    type: GraphQLInt,
                    description: "Return posts that have appeared after this ID. (Defaults to 0, used for paging through results)"
                },
                reblog_info: {
                    type: GraphQLBoolean,
                    description: "If true, returns reblog information for each post. (Defaults to false)"
                },
                notes_info: {
                    type: GraphQLBoolean,
                    description: "If true, returns notes information for each post. (Defaults to false)"
                }
            },
            resolve: (_, args) => client.userDashboard(args).then(dash => dash.posts),
        },


        UserLikes: {
            type: UserLikesType,
            description: 'Returns liked posts from querying user.',
            args: {
                limit: {
                    type: GraphQLInt,
                    description: "The number of posts to return. (1-20, inclusive, default is 20)",
                },
                num: {
                    type: GraphQLInt,
                    description: "The number to use with if a method is specified (Required if method is set)" +
                    "\n - offset: Liked post number to start at.\n - before: Timestamp to retrieve liked posts BEFORE." +
                    "\n - after: Timestamp to retrieve liked posts AFTER.",
                },
                method: {
                    type: GraphQLString,
                    description: "Method with which to filter liked posts. (Defaults to none, only valid settings: offset, before, or after)"
                },
            },
            resolve: (_, args) => client.userLikes({ limit: args.limit, [args.method]: args.num, }),
        },

        UserFollowing: {
            type: UserFollowingType,
            description: 'Returns blogs followed by authenticated user',
            args: {
                limit: {
                    type: GraphQLInt,
                    description: "The number of blogs to return. (1-20, inclusive, default is 20)"
                },
                offset: {
                    type: GraphQLInt,
                    description: "The blog number to start at. (Defaults to 0)"
                },
            },
            resolve: (_, args) => client.userFollowing(args),
        },
    }
});
