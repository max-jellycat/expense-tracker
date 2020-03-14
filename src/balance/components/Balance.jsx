import React from 'react';
import styled from 'styled-components';

import useBalance from 'balance/contexts/balance';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import IncomeExpenses from 'balance/components/IncomeExpenses';

const BalanceView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CurrentBalance = styled(Text)`
  margin-top: ${(props) => props.theme.sizings.small};
`;

const Balance = () => {
  const { balance } = useBalance();

  return (
    <BalanceView>
      <Heading size="default" isUppercase>
        Your balance
      </Heading>
      <CurrentBalance size="larger" isBold>
        {`${balance} €`}
      </CurrentBalance>
      <IncomeExpenses />
    </BalanceView>
  );
};

export default Balance;
