import styled from 'styled-components';
import Tagline from '@components/Tagline';
import SocialIconBar from '@components/SocialIconBar';

const StyledHeading = styled.h1`
  font-size: 8rem;
  font-weight: normal;
  font-family: 'Komoda';
  margin-bottom: -10px;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function Home() {
  return (
    <ContentDiv>
      <div>
        <StyledHeading>HI I am LEMOKAMI</StyledHeading>
        <Tagline>Student | Developer | Mentor</Tagline>
        <SocialIconBar />
      </div>
    </ContentDiv>
  );
}
