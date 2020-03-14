import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioField = ({ className, name, checked, label, value, onChange }) => {
  return (
    <div className={className}>
      <RadioButton
        type="radio"
        id={`${name}-${value}`}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor={`${name}-${value}`}>{label}</Label>
      <RadioButtonCheckMark />
    </div>
  );
};

RadioField.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Label = styled.label`
  margin-left: ${(props) => props.theme.sizings.medium};
`;

const RadioButtonCheckMark = styled.span`
  position: absolute;
  width: ${(props) => props.theme.sizings.medium};
  height: ${(props) => props.theme.sizings.medium};
  border-radius: 50%;
  background: white;
  border: 2px solid ${(props) => props.theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: ${(props) => props.theme.sizings.small};
    height: ${(props) => props.theme.sizings.small};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
    background: white;
    display: none;
  }
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  margin-left: 3px;
  width: ${(props) => props.theme.sizings.medium};
  height: ${(props) => props.theme.sizings.medium};

  &:hover ~ ${RadioButtonCheckMark} {
    background: #bebebe;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: ${(props) => props.theme.sizings.small};
      height: ${(props) => props.theme.sizings.small};
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked ~ ${RadioButtonCheckMark} {
      background: ${props.theme.colors.primary};
      border: 1px solid ${props.theme.colors.primary};
      &::after {
        display: block;
      }
    }
  `}
`;

const StyledField = styled(RadioField)`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  margin: ${(props) => props.theme.sizings.medium} 0;

  &:hover ~ ${RadioButtonCheckMark} {
    background-color: red;
  }
`;

export default StyledField;
