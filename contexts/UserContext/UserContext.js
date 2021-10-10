import React, {useState, useReducer, useEffect, useContext} from 'react'
import LoginContext from "../LoginContext/LoginContext";

export const UserContext = React.createContext()
export const UserConsumer = UserContext.Consumer
export const UserProvider = UserContext.Provider



export const UserProviderComponent = (props) => {
    const context = useContext(LoginContext);
    const [state, setState] = useState({isLoading: true, userdata: null})
    
    const {username} = context;

    function fetchData (){
      console.log('fetching data..');
      //setState({isLoading: true})
      fetch('https://graphql.voilk.com/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: `
          { 
            account(name: "${username}") 
            { 
              id 
              name 
              membership {
                username
                membership
                max_invites
                max_withdrawal
                max_commission
                created_at
                updated_at
              }
              json_metadata 
              {
                cover_image 
                name 
                about 
                location 
                website 
                profile_image
              } 
              voting_manabar 
              {
                current_mana
              } 
              balance 
              vsd_balance 
              savings_balance 
              savings_vsd_balance 
              savings_withdraw_requests 
              coining_shares 
              delegated_coining_shares 
              received_coining_shares 
              coining_withdraw_rate 
              next_coining_withdrawal 
            }
          }` 
          }),
      })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if (res.data.account !== null) {
          console.log('fetching profile data..');
          //setState({isLoading: true})
          setState({isLoading: false, userdata: res.data.account})
          
        }
        else {
            console.log("Could not connect..")
        }
      })
    }
    useEffect(()=> {
      const ISSERVER = typeof window === "undefined";
      if(!ISSERVER)
      fetchData();
    }, [])


    return (
    <UserProvider value={state}>
        {props.children}
    </UserProvider>
    )
}

export default UserContext