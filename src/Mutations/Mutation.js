const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
} = require('graphql');

module.exports = client => new GraphQLObjectType({
    name: "Mutation",
    description: 'Basis for API mutations.',
    fields: () => ({
        LikePost: {
            type: GraphQLString,
            args: {
                id: { type: GraphQLFloat },
                reblog_key: { type: GraphQLString },
            },
            resolve: (root, args) => client.likePost(args.id, args.reblog_key).then(d => "Post liked!").catch(e => e),
        },
        UnlikePost: {
            type: GraphQLString,
            args: {
                id: { type: GraphQLFloat },
                reblog_key: { type: GraphQLString },
            },
            resolve: (root, args) => client.unlikePost(args.id, args.reblog_key).then(d => "Post unliked!").catch(e => e),
        },
        FollowBlog: {
            type: GraphQLString,
            args: {
                url: { type: GraphQLString },
            },
            resolve: (root, args) => client.followBlog(args.url).then(d => "Blog followed!").catch(e => e),
        },
        UnfollowBlog: {
            type: GraphQLString,
            args: {
                url: { type: GraphQLString },
            },
            resolve: (root, args) => client.unfollowBlog(args.url).then(d => "Blog unfollowed!").catch(e => e),
        },
        ReblogPost: {
            type: GraphQLString,
            args: {
                blog_name: { type: GraphQLString },
                id: { type: GraphQLFloat },
                reblog_key: { type: GraphQLString },
                comment: { type: GraphQLString, defaultValue: "" },
            },
            resolve: (root, args) => {
                const { blog_name, ...opts } = args;
                client.reblogPost(blog_name, opts).then(d => "Post reblogged!").catch(e => e);
            },
        },
        DeletePost: {
            type: GraphQLString,
            args: {
                id: { type: GraphQLFloat, description: "Post ID to delete" },
                blog_name: { type: GraphQLString, description: "Blog to delete post from" },
            },
            resolve: (root, args) => client.deletePost(args.blog_name, args.id).then(d => "Post deleted!").catch(e => e),
        },

        /**
         * Still need:
         * blogAvatar - ?!?!?!?
         * blogQueue
         * blogDrafts
         * blogSubmissions
         * editPost
         * client.createTextPost
            client.createPhotoPost
            client.createQuotePost
            client.createLinkPost
            client.createChatPost
            client.createAudioPost
            client.createVideoPost
        */

    })
});
