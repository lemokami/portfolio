import { StyledTagline } from './Tagline.styles';

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
