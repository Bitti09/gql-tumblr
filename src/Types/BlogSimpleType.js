const {
  GraphQLObjectType,
  GraphQLList,
	GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require("graphql");

module.exports = new GraphQLObjectType({
    name: 'BlogSimple',
    description: 'Holds simple data about a blog.',
    fields: () => ({
      is_optout_ads: {
        type: GraphQLBoolean,
        description: 'True if this blog opts out of ads.',
      },
      url: {
        type: GraphQLString,
        description: "This blog's URL.",
      },
      updated: {
        type: GraphQLInt,
        description: "Timestamp of this blog's latest update.",
      },
      type: {
        type: GraphQLString,
        description: "The most common type of post this blog makes.",
      },
      twitter_send: {
        type: GraphQLBoolean,
        description: "This blog's URL.",
      },
      twitter_enabled: {
        type: GraphQLBoolean
      },
      tweet: {
        type: GraphQLString
      },
      total_posts: {
        type: GraphQLInt,
        description: "Total number of posts this blog has made.",
      },
      title: {
        type: GraphQLString,
        description: "This blog's title.",
      },
      subscribed: {
        type: GraphQLBoolean,
        description: "True if querying user is subscribed to this blog.",
      },
      share_likes: {
        type: GraphQLBoolean,
        description: "True if this blog shares it's liked posts.",
      },
      reply_conditions: {
        type: GraphQLString
      },
      queue: {
        type: GraphQLInt,
      },
      primary: {
        type: GraphQLBoolean,
      },
      posts: {
        type: GraphQLInt
      },
      name: {
        type: GraphQLString
      },
      messages: {
        type: GraphQLInt
      },
      likes: {
        type: GraphQLInt
      },
      is_nsfw: {
        type: GraphQLBoolean
      },
      is_blocked_from_primary: {
        type: GraphQLBoolean
      },
      is_adult: {
        type: GraphQLBoolean
      },
      followers: {
        type: GraphQLInt
      },
      followed: {
        type: GraphQLBoolean
      },
      facebook_opengraph_enabled: {
        type: GraphQLString
      },
      facebook: {
        type: GraphQLString
      },
      drafts: {
        type: GraphQLInt
      },
      description: {
        type: GraphQLString
      },
      can_subscribe: {
        type: GraphQLBoolean
      },
      can_send_fan_mail: {
        type: GraphQLBoolean
      },
      ask_page_title: {
        type: GraphQLString
      },
      ask_anon: {
        type: GraphQLBoolean
      },
      ask: {
        type: GraphQLBoolean
      },
      admin: {
        type: GraphQLBoolean
      }
    })
});
