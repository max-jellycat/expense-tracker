import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = ({ color, isUppercase, isBold, size, className, children }) => (
  <p className={className}>{children}</p>
);

const StyledText = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors[props.color]};
  font-size: ${(props) => props.theme.fontSizes[props.size]};
  text-transform: ${(props) => (props.isUppercase ? 'uppercase' : 'inherit')};
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
`;

Text.propTypes = {
  color: PropTypes.string,
  isUppercase: PropTypes.bool,
  isBold: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

Text.defaultProps = {
  color: 'dark',
  isUppercase: false,
  isBold: false,
  size: 'default',
};

export default StyledText;
