import gql from "graphql-tag";

const GET_WITHDRAWAL_HISTORY = gql`
  query GetDepositHistory(
    $username: String!, 
    $wif: String!
  ) {
    get_withdrawal_history(
      username: $username, 
      wif: $wif 
    ){
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
  }
`;

export  {GET_WITHDRAWAL_HISTORY}