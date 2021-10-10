import gql from "graphql-tag";

const WITHDRAWAL_REQS = gql`
  query GetWithdrawalRequests($username: String!, $wif: String!, $page: Int!, $limit: Int!) {
    get_withdrawal_requests(
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

export  {WITHDRAWAL_REQS}