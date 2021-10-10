import gql from "graphql-tag";

const GET_MEMBERSHIPS = gql`
  query GetMemberships {
    get_memberships {
        id
        type
        increment
        max_commission
        buyer_share
        promoter_share
        company_share
        max_withdrawal
        cost
      }
  }
`;

export  {GET_MEMBERSHIPS}