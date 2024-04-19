// pages/api/auth/[...nextauth].js
import { NextAuth } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// const providers = [
//   GoogleProvider({
//     clientId: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   }),
//   // Add other authentication providers here
// ];

// const options = {
//   providers,
//   // Your other options
// };

// export default (req, res) => NextAuth(req, res, options);

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        })
      ],
  }
  export default NextAuth(authOptions)