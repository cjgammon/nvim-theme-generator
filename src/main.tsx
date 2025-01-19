import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./App.tsx";
import themeModel from "./models/theme/themeModel.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider themeModel={themeModel}>
      <App />
    </Provider>
  </StrictMode>
);
