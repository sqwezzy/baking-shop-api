import {ExtractJwt, Strategy} from "passport-jwt";
import {User} from '../models/userSchema';
import {constant} from "../config/const";


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: constant.jwt
};


export const passportPath = (passport: any) => {
    passport.use(
        new Strategy(options, async (payload, done) => {
            try {
                const user = await User.findById(payload.userId).select('admin email id');
                if (user) {
                    done(null, user);
                } else {
                    done(null, false)
                }
            } catch (error) {
                done(error, false);
            }

        })
    )

};
