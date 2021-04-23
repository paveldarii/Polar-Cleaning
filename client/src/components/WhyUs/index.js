import React from "react";
import whyUsReasons from "../../assets/whyUsReasons";
import WhyUsCard from "../WhyUsCard";
import Wrapper from "../Wrapper";
import { Container } from "react-bootstrap";

export default function WhyUs() {
  return (
    <>
      <Wrapper>
        <h2>Why Choose us</h2>
        <p>
          There are many reasons why Polar Cleaning is the right choice for our
          clients. Here are the top few reasons to give us a try:
        </p>

        {whyUsReasons.map((reason) => {
          return (
            <WhyUsCard title={reason.title} description={reason.description} />
          );
        })}
      </Wrapper>
    </>
  );
}
