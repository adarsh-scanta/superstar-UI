import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router";
import i18n from "./translation";
import { LastLocationProvider } from "react-router-last-location";
import { toast } from "react-toastify";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <LastLocationProvider>
        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider> 
      </LastLocationProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
