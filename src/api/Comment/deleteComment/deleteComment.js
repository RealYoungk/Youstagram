import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation:{
        deleteComment: async(_,args,{request})=>{
            isAuthenticated(request);
            const {id}=args;
            const {user} = request;
            return prisma.deleteComment({id});
        }
    }
}