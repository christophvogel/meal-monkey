import "./button.css";
import buttonText from "./button-filled.html";
import buttonLogo from "./button-border.html";
import buttonFB from "./button-fb.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const FilledButtton = () => buttonText;
export const BorderButton = () => buttonLogo;
export const FBButton = () => buttonFB;
