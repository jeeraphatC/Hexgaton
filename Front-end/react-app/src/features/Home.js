import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Home({ className }) {
  return (
    <div className={className}>
      <h1>Welcome</h1>
      <p>
        Hello samd;lmsalkdjksadl;ma;kldalknlknflkdnsalfn;as
      </p>
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Home)`
  text-align: center;
`;