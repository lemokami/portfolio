import styled from 'styled-components';

type SocialIconType = {
  url: string;
  children: React.ReactNode;
};

const StyledSocialIcon = styled.a`
  color: #000;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  &:hover {
    border-color: #000;
  }
`;

const SocialIcon: React.FC<SocialIconType> = ({ url, children }) => {
  return <StyledSocialIcon href={url}>{children}</StyledSocialIcon>;
};

export default SocialIcon;
