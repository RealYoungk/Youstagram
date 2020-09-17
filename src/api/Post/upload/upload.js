import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { caption, vod } = args;
      const post = await prisma.createPost({
        caption,
        vod,
        user: { connect: { id: user.id } },
      });

      // hashtags.forEach(
      //   async (hashtag) =>
      //     await prisma.createHashtag({
      //       tag: hashtag,
      //       post: {
      //         connect: {
      //           id: post.id,
      //         },
      //       },
      //     })
      // );

      return post;
    },
  },
};
