import NextAuth from "next-auth"
// import AppleProvider  from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";




export const authOptions =  NextAuth({
    providers : [
        GithubProvider({
            clientId : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET
        }),
        // AppleProvider({
        //     clientId : process.env.APPLE_ID,
        //     clientSecret : process.env.APPLE_SECRET
        // })
    ]
})

export { authOptions as GET, authOptions as POST }