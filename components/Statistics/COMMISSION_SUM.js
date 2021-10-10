import gql from "graphql-tag";

const COMMISSION_SUM = gql`
  query GetCommissionInfo($username: String!, $wif: String!) {
    get_commissions_info(username: $username, wif: $wif) {
        H24
        D30
        Y1
        LT
      }
  }
`;

export  {COMMISSION_SUM}