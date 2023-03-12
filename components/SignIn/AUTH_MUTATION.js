import { gql, useMutation } from '@apollo/client';

const AUTH_MUTATION = gql`
  mutation AuthPosting($username: String!, $wif: String!) {
    auth_posting(username: $username, wif: $wif){
        authenticated
        public_key
        private_key
    }
  }
`;

export {AUTH_MUTATION}