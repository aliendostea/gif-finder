import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//// on progress
const Details = () => {
  const urlParam = useParams();

  useEffect(() => {
    console.log("urlParam Details", urlParam);
  }, []);

  return <div>Details</div>;
};

export default Details;
