import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import passport from "passport";
import JWTStrategy from "passport-jwt";

const jwtOptions = {
  // 토큰을 받아와서 해석
  jwtFromRequest: JWTStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  //토큰을 암호화하는거
  secret: process.env.JWT_SECRET,
};

const verifyUser = (payload, done) => {
    try{

    }
};

//해석된 정보를 콜백함수로 전달
passport.use(new JWTStrategy(jwtOptions,verifyUser));