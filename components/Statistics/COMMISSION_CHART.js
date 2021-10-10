import gql from "graphql-tag";

const COMMISSION_CHART = gql`
  query GetCommissionsData($username: String!, $wif: String!) {
    get_commissions_data(username: $username, wif: $wif) {
        x
        y
      }
  }
`;

export  {COMMISSION_CHART}