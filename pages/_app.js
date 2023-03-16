import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { LoginProviderComponent } from "../contexts/LoginContext/LoginContext";
import { UserProviderComponent } from "../contexts/UserContext/UserContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});
function MyApp({ Component, pageProps }) {
  return (
    <LoginProviderComponent>
      <UserProviderComponent>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
          <ToastContainer theme="dark" />
        </ApolloProvider>
      </UserProviderComponent>
    </LoginProviderComponent>
  )
}

export default MyApp
