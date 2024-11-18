
import NextAuth from "next-auth"
// import AppleProvider  from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import User from "@/app/modals/User";
import Payment from "@/app/modals/Payment";
import connectDB from "@/app/db/connectDb";




export const authOptions = NextAuth({
    providers : [
        GithubProvider({
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET
        }),
        // AppleProvider({
        //     clientId : process.env.APPLE_ID,
        //     clientSecret : process.env.APPLE_SECRET
        // })
    ],
    callbacks : {
        async signIn({ user, account, profile, credentials }){
            await connectDB();
            if(account.provider == "github"){
                const currUser = await User.findOne({email : user.email});
                if(!currUser){
                    const newUser = await User.create({
                        email : user.email,
                        username : user.email.split("@")[0],
                    })
                    user.name = newUser.username;
                }else{
                    user.name = currUser.username
                }
                return true; // --> It will allow sign-in 
            }
        },
        async session({ session, user, token }){
            await connectDB();
            const dbUser = await User.findOne({ email : session.user.email })
            console.log("DB USER :", dbUser);
            if(dbUser){
                session.user.name = dbUser.username;
            }
            return session; // --> It will return modified session
        }
    }

})

export { authOptions as GET, authOptions as POST };