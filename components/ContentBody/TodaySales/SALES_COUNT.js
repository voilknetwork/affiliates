import gql from "graphql-tag";

const SALES_COUNT = gql`
  query GetSalesInfo($username: String!, $wif: String!) {
    get_sales_info(username: $username, wif: $wif) {
        H24
        D30
        Y1
        LT
      }
  }
`;

export  {SALES_COUNT}