'use client'
import {SessionProvider} from "next-auth/react"

const SessionWarpper = ({children}: {children:React.ReactNode})=>{
    return <SessionProvider>{children}</SessionProvider>
}
export default SessionWarpper