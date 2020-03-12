import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Field = ({
  className,
  type,
  name,
  placeholder,
  label,
  value,
  onChange,
}) => {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        label={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Field.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};

const StyledField = styled(Field)`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.sizings.medium} 0;
`;

const Label = styled.label`
  margin-bottom: ${(props) => props.theme.sizings.small};
`;

const Input = styled.input`
  border: 2px solid ${(props) => props.theme.colors.light};
  border-radius: ${(props) => props.theme.radius.medium};
  padding: ${(props) => props.theme.sizings.small};
  font-size: ${(props) => props.theme.fontSizes.default};
  font-family: ${(props) => props.theme.fonts.sansSerif};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export default StyledField;
