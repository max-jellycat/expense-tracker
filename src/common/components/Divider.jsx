import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divider = ({ className }) => {
  return <div className={className} />;
};

Divider.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDivider = styled(Divider)`
  width: 100%;
  height: 1px;
  border-top: 2px solid ${(props) => props.theme.colors.light};
`;

export default StyledDivider;
