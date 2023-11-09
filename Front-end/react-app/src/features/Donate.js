import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Donate({ className }) {
  
  return (
    <div className={className}>
      <h1>sadasdasdads</h1>
    </div>
  );
}

Donate.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Donate)`
h1{
    font-size:100px;
}
`;
