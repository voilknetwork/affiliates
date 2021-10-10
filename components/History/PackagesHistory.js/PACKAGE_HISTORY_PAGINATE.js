import gql from "graphql-tag";

const PACKAGE_HISTORY_PAGINATE = gql`
  query GetPackageHistory($username: String!, $wif: String!, $page: Int!, $limit: Int!) {
      get_package_history_p(
      username: $username, 
      wif: $wif,
      page: $page,
      limit: $limit
    ){
      docs {
        username
        type
        cost
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

export  {PACKAGE_HISTORY_PAGINATE}