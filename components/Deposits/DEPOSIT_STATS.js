import gql from "graphql-tag";

const DEPOSIT_STATS = gql`
  query GetDepositstats($username: String!, $wif: String!) {
    get_deposits_stats(
      username: $username, 
      wif: $wif
    ){
        pending
        processed
        rejected
    }
  }
`;

export  {DEPOSIT_STATS}