import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import ShopContextProvider from "./Context/ShopContext.jsx";
// Create a client
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </QueryClientProvider>
);
