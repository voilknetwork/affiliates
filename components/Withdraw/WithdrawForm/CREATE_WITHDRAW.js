import gql from "graphql-tag";


const CREATE_WITHDRAW = gql`mutation createWithdraw(
    $username: String!, 
    $wif: String!,
    $method: String!, 
    $deposo: String!, 
    $amount: String!
    ) {
        create_withdraw(username: $username, 
        wif: $wif, 
        method: $method, 
        deposo: $deposo, 
        amount: $amount ) {
            _id
            username
            method
            deposo
            amount
            status
            type
            created_at
            updated_at
    }
  }`;

export  {CREATE_WITHDRAW}