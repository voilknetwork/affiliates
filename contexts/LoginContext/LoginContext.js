import React from 'react'
const LoginContext = React.createContext({})

export const LoginProvider = LoginContext.Provider
export const LoginConsumer = LoginContext.Consumer

export function LoginProviderComponent(props) {
    const ISSERVER = typeof window === "undefined";
    let user = {
      username: null,
      password: null
    }
    if(!ISSERVER) {
      user = {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("wif")
      }
    }
    
    return (
      <LoginProvider value={user}>
        {props.children}
      </LoginProvider>
    )
}
export default LoginContext