import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createLink } from "apollo-absinthe-upload-link";

const ApolloClientProvider = ({ children }) => {
  const client = new ApolloClient({
    link: createLink({
      uri: "http://localhost:4000/graphql",
    }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { ApolloClientProvider };
