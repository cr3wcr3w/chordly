/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import "./shared/styles/main.css"

render(() => <App />, document.getElementById("root") as HTMLElement);
