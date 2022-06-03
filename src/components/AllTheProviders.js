import store from "../lib/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

/**
 * We group our providers to keep App cleaner
 */
function AllTheProviders({ children }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
}

export default AllTheProviders;
