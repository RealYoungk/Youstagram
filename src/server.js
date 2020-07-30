import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import passport from "passport";
import schema from "./schema";
import "./utils";
import "./passport";

const PORT = process.env.PORT;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));
// 파일 경로 보호
server.express.use("/api", passport.authenticate("jwt"));

server.start({ port: PORT }, () => console.log(`✔Server Running PORT : http://localhost:${PORT}✔`));
