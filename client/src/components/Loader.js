import React, { useState } from "react";
import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

function Loader() {
  const [loading] = useState(true);
  const [color] = useState("#ffffff");

  const override = css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;

  return (
    <div className="loader-container">
      <div className="loader">
        <PropagateLoader color={color} loading={loading} css={override} size={15} />
      </div>
    </div>
  );
}

export default Loader;
