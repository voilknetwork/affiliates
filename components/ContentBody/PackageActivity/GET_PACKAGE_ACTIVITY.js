import gql from "graphql-tag";

const GET_PACKAGE_ACTIVITY = gql`
  query GetPackageActivity($username: String!, $wif: String!) {
    get_package_history(username: $username, wif: $wif) {
        username
        type
        cost
        created_at
      }
  }
`;

export  {GET_PACKAGE_ACTIVITY}