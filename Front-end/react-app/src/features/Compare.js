import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import search from "./pic/search.png";
import astronaut from "./pic/astronaut.png";

function Compare({ className }) {
  return (
    <div className={className}>


      <h1>Compare</h1>

      
    </div>
  );
}

Compare.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Compare)`

h1{
  font-size:100px;
    color:#959595;
    text-align: center; 
    font-weight: bold;
    margin:100px;
}
 `;