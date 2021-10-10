import gql from "graphql-tag";

const REJECT_TRX = gql`
mutation rejectTransaction(
    $username: String!, 
    $wif: String!, 
    $trx_id: String!){
    reject_transaction(
        username: $username, 
        wif: $wif, 
        trx_id: $trx_id)
    {
        _id
        username
        method
        deposo
        amount
        status
        type
        created_at
        updated_at
        error
    }
}`;

export  {REJECT_TRX}