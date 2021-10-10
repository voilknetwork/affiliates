import gql from "graphql-tag";

const CHART_DATA = gql`
  query GetCustomersData($username: String!, $wif: String!) {
    get_customers_data(username: $username, wif: $wif) {
        x
        y
      }
  }
`;

export  {CHART_DATA}