import styled from 'styled-components';

const StyledTagline = styled.div`
  font-family: 'RobotoSlab';
  text-transform: uppercase;
  width: 100%;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Tagline = ({ children }: { children: string }) => (
  <StyledTagline>
    {children.split('').map((letter, index) => (
      <span key={index}>{letter}</span>
    ))}
  </StyledTagline>
);

export default Tagline;
