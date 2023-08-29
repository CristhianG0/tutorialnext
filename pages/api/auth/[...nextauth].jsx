import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
//import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "lib/mongodb.tsx"
/**import GoogleProvider from 'next-auth/providers/google' */
export default NextAuth({
   // adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
            
        }),
        /*GoogleProvider({
            clientId:'',
            clientSecret:''  })*/
    ]
})