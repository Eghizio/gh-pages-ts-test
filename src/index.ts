import { concatenation } from "./concatenation.js";

const safeQuerySelector = <K extends keyof HTMLElementTagNameMap>(
  selector: K
) => {
  const element = document.querySelector(selector);
  if (!element) throw new Error(`Can't find selector "${selector}"`);
  return element;
};

safeQuerySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const value = safeQuerySelector("input").value;
  const result = concatenation(value, "hello My friend!");

  console.log(result);
  alert(result);
});
