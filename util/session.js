import { withIronSession } from "next-iron-session"

export default function withSession(handler) {
    return withIronSession(handler, {
      //WARN - process.env.APPLICATION_SECRET - didn't work  
      password: "4i@$p7Cw$XVJ4s7$JB7R%zd80jbQ8DoF",
      cookieName: "mediaroom",
      cookieOptions: {
        secure: process.env.NODE_ENV === "production",
      },
    })
  }