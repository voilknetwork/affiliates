import gql from "graphql-tag";

const BOARD_HISTORY = gql`
  query GetBoardHistory{
      get_board_history{
      _id
      count
    }
  }
`;

export  {BOARD_HISTORY}