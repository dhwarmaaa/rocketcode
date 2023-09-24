// Resources
import { ApolloClientProvider } from "./store/ApolloProvider";

// Components
import Home from "./screens/Home";

function App() {
  return (
    <ApolloClientProvider>
      <Home />
    </ApolloClientProvider>
  );
}

export default App;
