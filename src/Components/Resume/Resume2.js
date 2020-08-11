import React from "react";
import Pdf from "./files/Hunter_Scheel_Resume.pdf";
const Resume2 = () => {
  return (
    <div className="content justify-content-center row">
      <a
        href={Pdf}
        target="_blank"
        className="container col-10 justify-content-center text-center"
      >
        {" "}
        <button className="col-12 btn btn-danger btn-lg">VIEW PDF</button>
      </a>
    </div>
  );
};
export default Resume2;
