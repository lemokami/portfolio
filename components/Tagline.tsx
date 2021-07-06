import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledTagline = styled(motion.div)`
  color: ${(props) => props.theme.text};
  font-family: 'RobotoSlab';
  text-transform: uppercase;
  width: 100%;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Tagline = ({ children }: { children: string }) => (
  <StyledTagline
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    }}>
    {children.split('').map((letter, index) => (
      <span key={index}>{letter}</span>
    ))}
  </StyledTagline>
);

export default Tagline;
