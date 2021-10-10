import gql from "graphql-tag";

const CUSTOMERS_COUNT = gql`
  query GetCustomersInfo($username: String!, $wif: String!) {
    get_customers_info(username: $username, wif: $wif) {
        H24
        D30
        Y1
        LT
      }
  }
`;

export  {CUSTOMERS_COUNT}