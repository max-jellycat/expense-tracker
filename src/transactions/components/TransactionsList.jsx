import React from 'react';
import styled from 'styled-components';

import Heading from 'common/components/Heading';
import Divider from 'common/components/Divider';
import Transaction from 'transactions/components/Transaction';

const StyledTransactionsList = styled.div`
  margin-top: ${(props) => props.theme.sizings.large};
`;

const HeadingDivider = styled(Divider)`
  margin-top: ${(props) => props.theme.sizings.small};
  margin-bottom: ${(props) => props.theme.sizings.medium};
`;

const TransactionsList = () => (
  <StyledTransactionsList>
    <Heading size="default" isUppercase isBold>
      History
    </Heading>
    <HeadingDivider />
    <Transaction type="income" amount={400} text="Salary" />
    <Transaction type="expense" amount={-200} text="Withdraw" />
  </StyledTransactionsList>
);

export default TransactionsList;
