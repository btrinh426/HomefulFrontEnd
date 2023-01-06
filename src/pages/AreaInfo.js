import React from "react";
import { useParams } from "react-router-dom";

const AreaInfo = () => {
  let { id } = useParams();

  return (
    <>
      <div>AreaInfo</div>
      <div>ID: {id}</div>
    </>
  );
};

export default AreaInfo;
