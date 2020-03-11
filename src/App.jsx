import React from 'react';
import styled from 'styled-components';

import 'App.css';
import Theme from 'common/components/Theme';

import Heading from 'common/components/Heading';

const Wrapper = styled.div`
  padding: ${(props) => props.theme.sizings.medium};
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-size: ${(props) => props.theme.fontSizes.small};
`;

const App = () => (
  <Theme>
    <Wrapper>
      <Heading size="small" color="primary" text="Hello World" isBold />
    </Wrapper>
  </Theme>
);

export default App;
