import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import AzureAD from "next-auth/providers/azure-ad"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    AzureAD({
      clientId: process.env.AUTH_MICROSOFT_ID,
      clientSecret: process.env.AUTH_MICROSOFT_SECRET,
      tenantId: process.env.AUTH_MICROSOFT_TENANT_ID,
    }),
    Credentials({
      name: "Credenciales",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" },
        otp: { label: "Código 2FA", type: "text" }
      },
      async authorize(credentials) {
        const mockUser = { 
          id: "1", 
          name: "Usuario Demo", 
          email: "demo@correo.com", 
          password: "password123", 
          otp: "123456"
        }

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Faltan credenciales")
        }

        
        if (credentials.email === mockUser.email && credentials.password === mockUser.password) {
          
         
          if (credentials.otp === mockUser.otp) {
            return mockUser
          } else {
            throw new Error("Código OTP incorrecto")
          }
        }
        
        throw new Error("Credenciales inválidas")
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth
    },
  },
})