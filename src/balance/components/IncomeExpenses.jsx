import React from 'react';
import styled from 'styled-components';

import Card from 'common/components/Card';
import Text from 'common/components/Text';

const StyledCard = styled(Card)`
  margin-top: ${(props) => props.theme.sizings.medium};
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const IncomeExpense = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.theme.sizings.large};
  position: relative;

  &:first-child::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 50%;
    right: 0;
    border-right: 2px solid ${(props) => props.theme.colors.light};
  }
`;

const IncomeExpenseLabel = styled(Text)`
  margin-bottom: ${(props) => props.theme.sizings.small};
`;

const IncomeExpenses = () => (
  <StyledCard noPadding>
    <IncomeExpense>
      <IncomeExpenseLabel isUppercase>Income</IncomeExpenseLabel>
      <Text color="success" size="large" isBold>
        400 €
      </Text>
    </IncomeExpense>
    <IncomeExpense>
      <IncomeExpenseLabel isUppercase>Expenses</IncomeExpenseLabel>
      <Text color="danger" size="large" isBold>
        200 €
      </Text>
    </IncomeExpense>
  </StyledCard>
);

export default IncomeExpenses;
