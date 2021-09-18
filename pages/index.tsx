import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Tagline from '@components/Tagline/Tagline';
import SocialIconBar from '@components/SocialIconBar/SocialIconBar';

const StyledHeading = styled(motion.h1)`
  font-size: 8rem;
  font-weight: normal;
  font-family: 'Komoda';
  margin-bottom: -10px;
  color: ${(props) => props.theme.text};

  @media screen and (max-width: 640px) {
    font-size: 6rem;
  }
`;

const ContentDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${(props) => props.theme.background};
`;

export default function Home() {
  return (
    <AnimatePresence exitBeforeEnter>
      <ContentDiv
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}>
        <motion.div>
          <StyledHeading
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                ease: 'easeOut',
              },
            }}>
            HI I am LEMOKAMI
          </StyledHeading>
          <Tagline>Student | Developer | Mentor</Tagline>
          <SocialIconBar />
        </motion.div>
      </ContentDiv>
    </AnimatePresence>
  );
}
