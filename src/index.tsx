import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import Router from "./router";
import i18n from "./translation";
import ErrorBoundary from "./components/Error/ErrorBoundary";

// loadStripe();

const App = () => (
  <ErrorBoundary>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </BrowserRouter>
  </ErrorBoundary>
);

ReactDOM.render(<App />, document.getElementById("root"));
