import React from 'react';
import styled from 'styled-components';

import Heading from 'common/components/Heading';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.sizings.large};
`;

const Header = () => (
  <HeaderContainer>
    <Heading size="larger" color="primary" isBold>
      Expense Tracker
    </Heading>
  </HeaderContainer>
);

export default Header;
