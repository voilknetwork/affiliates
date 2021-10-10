import gql from "graphql-tag";


const DELETE_DEPOSIT = gql`
    mutation deleteDeposit($username: String!, $wif: String!, $trx_id: String!) {
        delete_deposit(username: $username, wif: $wif, trx_id: $trx_id ) {
            n
            ok
            deletedCount
        }
    }`;

export { DELETE_DEPOSIT }