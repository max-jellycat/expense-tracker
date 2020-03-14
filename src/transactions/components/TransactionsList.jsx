import React from 'react';
import styled from 'styled-components';

import useTransaction from 'transactions/contexts/transactions';

import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Divider from 'common/components/Divider';
import Transaction from 'transactions/components/Transaction';

const StyledTransactionsList = styled.div`
  margin-top: ${(props) => props.theme.sizings.large};
`;

const HeadingDivider = styled(Divider)`
  margin-top: ${(props) => props.theme.sizings.small};
  margin-bottom: ${(props) => props.theme.sizings.medium};
`;

const Emoji = styled.span`
  margin-left: ${(props) => props.theme.sizings.small};
`;

const TransactionsList = () => {
  const { transactions } = useTransaction();
  return (
    <StyledTransactionsList>
      <Heading size="default" isUppercase isBold>
        History
      </Heading>
      <HeadingDivider />
      {transactions.length ? (
        transactions.map((t) => (
          <Transaction
            key={t.id}
            amount={t.amount}
            text={t.text}
            type={t.type}
          />
        ))
      ) : (
        <Text>
          <span>No transactions yet.</span>
          <Emoji aria-label="sad" role="img">
            😔
          </Emoji>
        </Text>
      )}
    </StyledTransactionsList>
  );
};

export default TransactionsList;
