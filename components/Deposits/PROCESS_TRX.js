import gql from "graphql-tag";

const PROCESS_TRX = gql`
mutation processTransaction(
    $username: String!, 
    $wif: String!, 
    $trx_id: String!){
    process_transaction(
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

export  {PROCESS_TRX}