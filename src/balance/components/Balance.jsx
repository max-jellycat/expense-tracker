import React from 'react';
import styled from 'styled-components';

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

const Balance = () => (
  <BalanceView>
    <Heading size="default" isUppercase>
      Your balance
    </Heading>
    <CurrentBalance size="larger" isBold>
      200.00 €
    </CurrentBalance>
    <IncomeExpenses />
  </BalanceView>
);

export default Balance;
