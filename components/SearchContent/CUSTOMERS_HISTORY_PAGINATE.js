import gql from "graphql-tag";

const CUSTOMERS_HISTORY_PAGINATE = gql`
  query GetCustomersHistory($username: String!, $wif: String!, $page: Int!, $limit: Int!) {
      get_customers_history_p(
      username: $username, 
      wif: $wif,
      page: $page,
      limit: $limit
    ){
      docs {
        inviter
        invitee
        creation_time
        error
      }
      totalDocs
      offset
      limit
      totalPages
      page
      pagingCounter
      hasPrevPage
      hasNextPage
      prevPage
      nextPage
    }
  }
`;

export  {CUSTOMERS_HISTORY_PAGINATE}