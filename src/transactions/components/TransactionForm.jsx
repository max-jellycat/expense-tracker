import React, { useState } from 'react';
import styled from 'styled-components';

import useTransaction from 'transactions/contexts/transactions';
import useBalance from 'balance/contexts/balance';

import InputField from 'common/components/InputField';
import RadioField from 'common/components/RadioField';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Divider from 'common/components/Divider';
import Button from 'common/components/Button';

const HeadingDivider = styled(Divider)`
  margin-top: ${(props) => props.theme.sizings.small};
  margin-bottom: ${(props) => props.theme.sizings.medium};
`;

const Container = styled.div`
  margin-top: ${(props) => props.theme.sizings.large};
`;

const HorizontalFields = styled.div`
  display: flex;

  ${RadioField}:first-child {
    margin-right: ${(props) => props.theme.sizings.large};
  }
`;

const Label = styled(Text)`
  margin-top: ${(props) => props.theme.sizings.large};
`;

const TransactionForm = () => {
  const { addTransaction } = useTransaction();
  const { addIncome, addExpense } = useBalance();
  const [values, setValues] = useState({
    text: '',
    amount: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { text, amount, type } = values;
    const parsedAmount = Math.round(parseFloat(amount) * 100) / 100;

    addTransaction({
      text,
      amount: parsedAmount,
      type,
    });

    type === 'income' ? addIncome(parsedAmount) : addExpense(parsedAmount);

    setValues({
      text: '',
      type: '',
      amount: '',
    });
  };

  return (
    <Container>
      <Heading size="default" isUppercase isBold>
        Add new transaction
      </Heading>
      <HeadingDivider />
      <form onSubmit={handleSubmit}>
        <InputField
          name="text"
          placeholder="Enter text"
          label="Text"
          value={values.text}
          onChange={handleChange}
        />
        <Label>Type</Label>
        <HorizontalFields>
          <RadioField
            name="type"
            label="Income"
            value="income"
            onChange={handleChange}
            checked={values.type === 'income'}
          />
          <RadioField
            name="type"
            label="Expense"
            value="expense"
            onChange={handleChange}
            checked={values.type === 'expense'}
          />
        </HorizontalFields>
        <InputField
          type="number"
          name="amount"
          placeholder="Enter amount"
          label="Amount"
          value={values.amount}
          onChange={handleChange}
        />
        <Button type="submit" color="primary" isFullwidth>
          Add transaction
        </Button>
      </form>
    </Container>
  );
};

export default TransactionForm;
