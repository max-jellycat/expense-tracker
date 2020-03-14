import React, { useState, useEffect, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

import useTransaction from 'transactions/contexts/transactions';

const BalanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const updateBalance = () => {
    setBalance(Math.round((incomes - expenses) * 100) / 100);
  };

  const addIncome = (value) => {
    setIncomes(Math.round((incomes + value) * 100) / 100);
  };

  const addExpense = (value) => {
    setExpenses(Math.round((expenses + value) * 100) / 100);
  };

  useEffect(() => updateBalance(), [incomes, expenses]);

  return (
    <BalanceContext.Provider
      value={{
        balance,
        incomes,
        expenses,
        addIncome,
        addExpense,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

BalanceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useBalance = () => useContext(BalanceContext);

export default useBalance;
