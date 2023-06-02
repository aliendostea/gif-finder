import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./styles/globals.scss";
import FallbackAppOnload from "./pages/fallbackApp/FallbackAppOnload";
const App = lazy(() => import("./App"));

function RenderApp() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FallbackAppOnload />}>
        <App />
      </Suspense>
    </BrowserRouter>
  );
}

ReactDOM.render(<RenderApp />, document.getElementById("root"));
