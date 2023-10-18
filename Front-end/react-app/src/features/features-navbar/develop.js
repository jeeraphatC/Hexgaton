import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Develop({ className }) {
  return (
    <div className={className}>
      <h1>Welcome</h1>
      <p>
        Welcome to development 
        To find job
      </p>
    </div>
  );
}

Develop.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Develop)`
  /* Add your styling here */
`;