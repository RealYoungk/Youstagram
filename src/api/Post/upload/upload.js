import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    upload: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const { caption, vod, hashtags } = args;
      const post = await prisma.createPost({
        caption,
        vod,
        user: { connect: { id: user.id } },
      });
      if (hashtags) {
        const hashtagArr = hashtags.substring(1).split("#", 10);

        hashtagArr.map(
          async (hashtag) =>
            await prisma.createHashtag({
              tag: hashtag,
              post: {
                connect: {
                  id: post.id,
                },
              },
            })
        );
      }

      return post;
    },
  },
};
