import { useContext } from "react"
import { LoginContext } from "../contexts"


const isLoggedIn = () => {
  const {username, password} = useContext(LoginContext)

  if(!username ||
    !password ||
    username === "null" ||
    password === "null" ||
    username === "" ||
    password === "" ||
    username === "undefined"||
    password === "undefined"

    ){
        return false
    }
    else return true

}


export {isLoggedIn}