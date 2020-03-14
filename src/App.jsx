import React from 'react';
import styled from 'styled-components';

import 'App.css';
import Theme from 'common/components/Theme';

import { TransactionsProvider } from 'transactions/contexts/transactions';
import { BalanceProvider } from 'balance/contexts/balance';
import Header from 'common/components/layout/Header';
import Balance from 'balance/components/Balance';
import TransactionsList from 'transactions/components/TransactionsList';
import TransactionsForm from 'transactions/components/TransactionForm';

const Wrapper = styled.div`
  padding: ${(props) => props.theme.sizings.medium};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-size: ${(props) => props.theme.fontSizes.default};
  width: 30%;
  margin: 0 auto;
`;

const App = () => (
  <Theme>
    <Wrapper>
      <TransactionsProvider>
        <BalanceProvider>
          <Header />
          <Balance />
          <TransactionsList />
          <TransactionsForm />
        </BalanceProvider>
      </TransactionsProvider>
    </Wrapper>
  </Theme>
);

export default App;
