import gql from "graphql-tag";

const COMMISSION_HISTORY_PAGINATE = gql`
  query GetCommissionHistory($username: String!, $wif: String!, $page: Int!, $limit: Int!) {
      get_commission_history_p(
      username: $username, 
      wif: $wif,
      page: $page,
      limit: $limit
    ){
      docs {
        from
        to
        commission
        created_at
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

export  {COMMISSION_HISTORY_PAGINATE}