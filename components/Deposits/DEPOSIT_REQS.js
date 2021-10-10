import gql from "graphql-tag";

const DEPOSIT_REQS = gql`
  query GetDepositRequests($username: String!, $wif: String!, $page: Int!, $limit: Int!) {
    get_deposit_requests(
      username: $username, 
      wif: $wif,
      page: $page,
      limit: $limit
    ){
      docs {
        username
        _id
        method
        deposo
        amount
        status
        type
        created_at
        updated_at
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

export  {DEPOSIT_REQS}