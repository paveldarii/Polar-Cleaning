import React from "react";
import {
  centerText,
  quaternaryTheme,
  titleColor,
} from "../../utils/GlobalStyle";
export default function AboutSection() {
  return (
    <div
      style={{
        ...centerText,
        ...quaternaryTheme,
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <h4 style={titleColor}>Welcome To Polar Cleaning</h4>
      <h2 style={{ color: "#0d7fb2" }}>Cleaning Services in Columbus</h2>
      <p
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "16px",
          maxWidth: "36em",
        }}
      >
        Polar Cleaning is an Columbus cleaning company that specialises in
        professional domestic & commercial services. We'll leave your house or
        commercial space looking clean, comfortable and inviting. Our mission at
        Polar Cleaning is to provide exceptional customer service and result
        driven cleaning solutions for our clients. The team of experienced
        professionals at PolarCleaning includes the best carpet cleaners, end of
        lease cleaners, carpet cleaning specialists, curtain cleaners & blind
        cleaners in Columbus.
      </p>
    </div>
  );
}
