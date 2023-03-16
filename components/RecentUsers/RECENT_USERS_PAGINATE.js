import gql from "graphql-tag";

const RECENT_USERS_PAGINATE = gql`
  query RecentUsersPaginate($page: Int!, $limit: Int!) {
      get_recent_users(
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

export  {RECENT_USERS_PAGINATE}