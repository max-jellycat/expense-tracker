import React, { useState } from 'react';
import styled from 'styled-components';

import Field from 'common/components/Field';
import Heading from 'common/components/Heading';
import Divider from 'common/components/Divider';
import Button from 'common/components/Button';

const HeadingDivider = styled(Divider)`
  margin-top: ${(props) => props.theme.sizings.small};
  margin-bottom: ${(props) => props.theme.sizings.medium};
`;

const Container = styled.div`
  margin-top: ${(props) => props.theme.sizings.large};
`;

const TransactionForm = () => {
  const [values, setValues] = useState({
    text: '',
    amount: '',
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
  };

  return (
    <Container>
      <Heading size="default" isUppercase isBold>
        Add new transaction
      </Heading>
      <HeadingDivider />
      <form onSubmit={handleSubmit}>
        <Field
          name="text"
          placeholder="Enter text"
          label="Text"
          value={values.text}
          onChange={handleChange}
        />
        <Field
          type="number"
          name="amount"
          placeholder="Enter amount"
          label="Amount (- expense, + income)"
          value={values.amount}
          onChange={handleChange}
        />
        <Button color="success" isFullwidth>
          Add transaction
        </Button>
      </form>
    </Container>
  );
};

export default TransactionForm;
