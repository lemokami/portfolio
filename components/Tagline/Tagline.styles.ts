import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledTagline = styled(motion.div)`
  color: ${(props) => props.theme.text};
  font-family: 'RobotoSlab';
  text-transform: uppercase;
  width: 100%;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
