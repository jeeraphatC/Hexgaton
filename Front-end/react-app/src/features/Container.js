import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Container({ children, classname }) {
    return <main className={classname}>{children}</main>
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired
};

export default styled(Container)`

  max-width: 1440px;
  padding: 4rem ;
`;