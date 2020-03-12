import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from 'common/components/Text';
import Card from 'common/components/Card';

const Transaction = ({ className, type, amount, text }) => (
  <Card className={className} type={type}>
    <Text>{text}</Text>
    <Text>{`${amount} €`}</Text>
  </Card>
);

const StyledTransaction = styled(Transaction)`
  display: flex;
  justify-content: space-between;
  border-right: 0.75em solid
    ${(props) =>
      props.type === 'income'
        ? props.theme.colors.success
        : props.theme.colors.danger};

  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.sizings.small};
  }
`;

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default StyledTransaction;
