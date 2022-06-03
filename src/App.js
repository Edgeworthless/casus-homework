import "./index.css";
import { TemplatesPage } from "./pages/TemplatesPage";
import AllTheProviders from "./components/AllTheProviders";

function App() {
  return (
    <AllTheProviders>
      <TemplatesPage />
    </AllTheProviders>
  );
}

export default App;
