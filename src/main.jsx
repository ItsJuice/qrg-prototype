import r2wc from "@r2wc/react-to-web-component";
import App from "./App";

const QRG = r2wc(App, {
  shadow: "open"
});

customElements.define("qrg-proto", QRG);