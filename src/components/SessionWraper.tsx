"use client"
import { SessionProvider } from "next-auth/react"


const SessionWraper =({children}:{children : React.ReactNode})=>{

     return(
        <SessionProvider>
              {children}
        </SessionProvider>
     )
}

export default SessionWraper