import * as React from "react";
const SvgPoint = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={32} cy={32} r={28} fill="currentColor" />
    <circle cx={32} cy={32} r={22} fill="currentColor" />
    <path
      fill="currentColor"
      d="m32.842 19.33 3.508 7.11 7.845 1.14a.938.938 0 0 1 .52 1.6l-5.676 5.534 1.34 7.813a.938.938 0 0 1-1.362.99L32 39.827l-7.017 3.69a.938.938 0 0 1-1.362-.99l1.34-7.813-5.677-5.534a.939.939 0 0 1 .52-1.6l7.846-1.14 3.508-7.11a.938.938 0 0 1 1.683 0z"
    />
  </svg>
);
export default SvgPoint;
