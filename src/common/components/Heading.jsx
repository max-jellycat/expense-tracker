import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = ({ className, children, size, color, isBold, isUppercase }) => (
  <h2 className={className}>{children}</h2>
);

const StyledHeading = styled(Heading)`
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
  font-size: ${(props) => props.theme.fontSizes[props.size]};
  color: ${(props) => props.theme.colors[props.color]};
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'inherit')};
  margin: 0;
`;

Heading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  isBold: PropTypes.bool,
  isUppercase: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

Heading.defaultProps = {
  size: 'default',
  color: 'dark',
  isBold: false,
  isUppercase: false,
};

export default StyledHeading;
