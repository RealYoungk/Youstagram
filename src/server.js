import "./env";
import { GraphQLServer } from "graphql-yoga";
import { prisma } from "../generated/prisma-client";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middlewares";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  //asdfasdf
  // 리졸버들간 정보를 공유할때 사용
  context: ({ request }) => ({ request, isAuthenticated }),
});

server.express.use(logger("dev"));

server.express.use(authenticateJwt);

server.start({ port: PORT }, () => console.log(`✔Server Running PORT : http://localhost:${PORT}`));
