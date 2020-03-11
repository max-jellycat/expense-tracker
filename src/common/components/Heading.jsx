import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BaseHeading = styled.h2`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  fontsize: ${(props) => props.theme.fontSizes[props.size]};
  color: ${(props) => props.theme.colors[props.color]};
`;

const Heading = ({ size, color, text, isBold }) => (
  <BaseHeading size={size} color={color} bold={isBold}>
    {text}
  </BaseHeading>
);

Heading.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isBold: PropTypes.bool.isRequired,
};

export default Heading;
