import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ color, isFullwidth, className, children }) => {
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
};

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${(props) =>
    props.color === 'warning'
      ? props.theme.colors.dark
      : props.theme.colors.white};
  padding: 0.75rem 1.25rem;
  border-radius: ${(props) => props.theme.radius.large};
  font-size: ${(props) => props.theme.fontSizes.default};
  border: 0;
  width: ${(props) => props.isFullwidth && '100%'};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors[`${props.color}Dark`]};
  }
`;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  isFullwidth: PropTypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  isFullwidth: false,
};

export default StyledButton;
