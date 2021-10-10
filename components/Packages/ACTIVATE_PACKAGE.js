import gql from "graphql-tag";

const ACTIVATE_PACKAGE = gql`
mutation ActivatePackage($username: String!, $wif: String!, $package_id: Int!){
    activate_package(username: $username, wif: $wif, package_id: $package_id){
        username
        type
        cost
        created_at
    }
}
`;

export  {ACTIVATE_PACKAGE}


