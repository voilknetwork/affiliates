import gql from "graphql-tag";

const GET_COMMISSION_ACTIVITY = gql`
  query GetCommissionActivity($username: String!, $wif: String!) {
    get_commission_history(username: $username, wif: $wif) {
        from
        to
        commission
        created_at
      }
  }
`;

export  {GET_COMMISSION_ACTIVITY}