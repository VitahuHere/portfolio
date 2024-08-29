import store from "./redux/store.ts";
import HomePage from "./pages/HomePage.tsx";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
