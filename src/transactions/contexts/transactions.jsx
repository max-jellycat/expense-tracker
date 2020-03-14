import React, { useState, useCallback, useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = useCallback((values) => {
    const { text, amount, type } = values;
    setTransactions([
      ...transactions,
      {
        id: uuid(),
        text,
        amount,
        type,
      },
    ]);
  });

  const deleteTransaction = useCallback((id) =>
    setTransactions(transactions.filter((t) => t.id !== id)),
  );

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

TransactionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useTransaction = () => useContext(TransactionsContext);

export default useTransaction;
