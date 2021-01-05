import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "./utils/dimensions";
import React from "react";
import ReactDOM from "react-dom";
//import * as Sentry from "@sentry/react";
//import { Integrations } from "@sentry/tracing";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Modal from "react-modal";
import App from "./App";
import { MotionConfig, AnimationFeature, GesturesFeature } from "framer-motion";
import Splash from "./views/splash";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
}

// Sentry.init({
//   dsn:
//     "https://647084abf3de441c83c17d2b603633b8@o477952.ingest.sentry.io/5520885",
//   integrations: [new Integrations.BrowserTracing()],
//   beforeSend: (event) => {
//     if (event.exception || event.extra.report === true) {
//       Sentry.showReportDialog();
//     }
//     return event;
//   },
//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });

Modal.setAppElement("#root");
ReactDOM.render(
  <MotionConfig features={[AnimationFeature, GesturesFeature]}>
    <Splash
      onLoadingFinished={() => {
        ReactDOM.render(
          <MotionConfig features={[AnimationFeature, GesturesFeature]}>
            <App />
          </MotionConfig>,
          document.getElementById("root")
        );
      }}
    />
  </MotionConfig>,
  document.getElementById("root"),
  () => {}
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
