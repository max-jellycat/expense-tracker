import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = ({ className, children, noPadding }) => (
  <div className={className}>{children}</div>
);

const StyledCard = styled(Card)`
  box-shadow: 1px 1px 3px ${(props) => props.theme.colors.greyLighter};
  border-radius: ${(props) => props.theme.radius.medium};
  padding: ${(props) => (props.noPadding ? 0 : props.theme.sizings.medium)};
`;

Card.propTypes = {
  className: PropTypes.string.isRequired,
  noPadding: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  noPadding: false,
};

export default StyledCard;
