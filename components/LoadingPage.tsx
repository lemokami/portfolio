import { motion } from 'framer-motion';
import styled from 'styled-components';

const icon = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const StyledContainer = styled(motion.div)`
  height: 100vh;
  overflow-x: hidden;
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledName = styled(motion.svg)`
  width: 20rem;
  height: auto;
  color: ${(props) => props.theme.text};

  @media screen and (max-width: 640px) {
    width: 16rem;
  }
`;

const LoadingPage = ({ setLoading }) => (
  <StyledContainer exit={{ opacity: 0 }}>
    <StyledName
      initial='hidden'
      animate='show'
      onAnimationComplete={() => setLoading(false)}
      viewBox='0 0 238 108'
      stroke='currentColor'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'>
      <motion.path
        variants={icon}
        d='M26.0155 40.328V7.064H42.7195V1.448H20.3995V93.176H42.7195V87.56H26.0155V45.8H42.7195V40.328H26.0155ZM6.43147 101.528V1.448H0.959473V107H42.7195V101.528H6.43147Z'
      />
      <motion.path
        variants={icon}
        d='M78.265 1.448C74.665 1.448 71.929 2.88799 69.625 5.192C67.609 2.744 65.017 1.448 61.705 1.448C59.689 1.448 56.809 2.456 55.513 4.184V1.448H49.897V107H55.513V12.536C55.513 9.512 57.961 7.064 61.129 7.064C64.297 7.064 66.889 9.512 66.889 12.536V107H72.505V12.536C72.505 9.512 74.953 7.064 78.121 7.064C81.145 7.064 83.593 9.512 83.593 12.536V107H89.209V12.536C89.209 6.056 84.169 1.448 78.265 1.448Z'
      />
      <motion.path
        variants={icon}
        d='M107.676 0.727997C101.196 0.727997 96.4438 5.768 96.4438 11.816V96.632C96.4438 102.824 101.34 107.864 107.676 107.864C114.012 107.864 118.764 102.824 118.764 96.632V11.816C118.764 5.336 113.724 0.727997 107.676 0.727997ZM113.148 96.632C113.148 99.8 110.7 102.248 107.676 102.248C104.508 102.248 102.06 99.8 102.06 96.632V11.816C102.06 8.792 104.364 6.34399 107.532 6.34399C110.844 6.34399 113.148 8.792 113.148 11.816V96.632Z'
      />
      <motion.path
        variants={icon}
        d='M144.551 43.064C147.431 40.472 148.295 37.592 148.295 34.856V2.168H142.679V34.712C142.679 37.736 140.231 40.328 137.063 40.328H131.591V2.168H125.975V107H131.591V45.944H137.063C140.231 45.944 142.679 48.68 142.679 51.704V107H148.295V51.416C148.295 48.68 147.719 45.656 144.551 43.064Z'
      />
      <motion.path
        variants={icon}
        d='M166.594 1.448C160.402 1.448 155.506 6.632 155.506 12.536V107H161.122V46.088H172.21V107H177.826V12.536C177.826 5.912 172.642 1.448 166.594 1.448ZM161.122 40.472V12.536C161.122 9.512 163.57 7.064 166.594 7.064C169.762 7.064 172.21 9.512 172.21 12.536V40.472H161.122Z'
      />
      <motion.path
        variants={icon}
        d='M213.406 1.448C209.806 1.448 207.07 2.88799 204.766 5.192C202.75 2.744 200.158 1.448 196.846 1.448C194.83 1.448 191.95 2.456 190.654 4.184V1.448H185.038V107H190.654V12.536C190.654 9.512 193.102 7.064 196.27 7.064C199.438 7.064 202.03 9.512 202.03 12.536V107H207.646V12.536C207.646 9.512 210.094 7.064 213.262 7.064C216.286 7.064 218.734 9.512 218.734 12.536V107H224.35V12.536C224.35 6.056 219.31 1.448 213.406 1.448Z'
      />
      <motion.path
        variants={icon}
        d='M237.056 2.168H231.584V107H237.056V2.168Z'
      />
    </StyledName>
  </StyledContainer>
);

export default LoadingPage;
