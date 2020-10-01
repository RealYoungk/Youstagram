import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Mutation: {
    addContent: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { content, userId, index, postId } = args;
      const { user } = request;
      const category = await prisma.createCategory({
        content: content,
        index: index,
        user: {
          connect: {
            id: userId,
          },
        },
        // post: {
        //   connect: {
        //     id: postId,
        //   },
        // },
      });
      return category;
    },
  },
};
