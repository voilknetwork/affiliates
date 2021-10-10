import { gql, useMutation } from '@apollo/client';

const AUTH_MUTATION = gql`
  mutation AuthActive($username: String!, $wif: String!) {
    auth_active(username: $username, wif: $wif){
        authenticated
        public_key
        private_key
    }
  }
`;

export {AUTH_MUTATION}