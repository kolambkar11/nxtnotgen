import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOption = {
    providers:[
        GithubProvider({
            clientId:'Ov23liMCiFHd078vkrg1',
            clientSecret:'cd9a5f06dff6fb5461fef9459669ac290a72a219'
        })
    ]
}

export default NextAuth(authOption)