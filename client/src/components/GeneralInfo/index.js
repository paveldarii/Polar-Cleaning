import React from "react";
import rawInfo from "../../assets/homeInfo";
import HomeInfo from "../HomeInfo";

export default function GeneralInfo() {
  return (
    <>
      {rawInfo.map((info) => {
        return (
          <HomeInfo
            title={info.title}
            description={info.description}
          ></HomeInfo>
        );
      })}
    </>
  );
}
