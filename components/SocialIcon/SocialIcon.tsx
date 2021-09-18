import { SocialIconType, StyledSocialIcon } from './SocialIcon.styles';

const SocialIcon: React.FC<SocialIconType> = ({ url, children, name }) => {
  return (
    <StyledSocialIcon href={url} aria-label={name}>
      {children}
    </StyledSocialIcon>
  );
};

export default SocialIcon;
