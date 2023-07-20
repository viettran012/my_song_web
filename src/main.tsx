import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import i18nConfig from "./i18n"
import { ConfigProvider } from "antd"
import { theme } from "./configs/antdConfig"
import { ThemeProvider } from "@mui/material"
import { theme_ } from "./configs/muiConfig"
i18nConfig()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme_}>
      <ConfigProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
