import gql from "graphql-tag";

const WITHDRAWAL_STATS = gql`
  query GetWithdrawalStats($username: String!, $wif: String!) {
    get_withdrawals_stats(
      username: $username, 
      wif: $wif
    ){
        pending
        processed
        rejected
    }
  }
`;

export  {WITHDRAWAL_STATS}