import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    addIndex: async (_, args, { request }) => {
      isAuthenticated(request);
      const { postId, categoryId } = args;
      const { user } = request;

      const post = await prisma.updatePost({
        data: {
          categories: {
            connect: {
              id: categoryId,
            },
          },
        },
        where: {
          id: postId,
        },
      });
      return post;
    },
  },
};
