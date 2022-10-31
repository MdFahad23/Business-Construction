import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./Readux/store";
import Index from "./Routers";

function App() {
  return (
    <main>
      <Provider store={store}>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;
