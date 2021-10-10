import gql from "graphql-tag";

const GET_MEMBERSHIP_INFO = gql`
  query GetMembershipInfo($username: String!, $wif: String!) {
    get_membership_info(username: $username, wif: $wif) 
    {
      username
      membership
      max_invites
      current_invites
      max_withdrawal
      current_withdrawal
      max_commission
      current_commission
      created_at
      updated_at
      }
  }
`;

export  {GET_MEMBERSHIP_INFO}