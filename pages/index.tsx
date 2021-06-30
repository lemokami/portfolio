import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Tagline from '@components/Tagline';
import SocialIconBar from '@components/SocialIconBar';
import LoadingPage from '@components/LoadingPage';

const StyledHeading = styled(motion.h1)`
  font-size: 8rem;
  font-weight: normal;
  font-family: 'Komoda';
  margin-bottom: -10px;

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
  background: #fafafa;
`;

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence exitBeforeEnter>
      {isLoading ? (
        <motion.div layout key='loader'>
          <LoadingPage setLoading={setIsLoading} />
        </motion.div>
      ) : (
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
      )}
    </AnimatePresence>
  );
}
