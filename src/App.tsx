import { Provider } from "react-redux";
import Router from "./router";
import { store } from "./services/redux/store";

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
