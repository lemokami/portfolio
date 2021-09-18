import { SocialIconType, StyledSocialIcon } from './SocialIcon.styles';
import { Howl } from 'howler';

const SocialIcon: React.FC<SocialIconType> = ({ url, children, name }) => {
  const click = new Howl({
    src: ['/sounds/click.wav'],
    volume: 0.4,
  });

  function handleMouse() {
    click.play();
  }
  return (
    <StyledSocialIcon href={url} aria-label={name} onMouseEnter={handleMouse}>
      {children}
    </StyledSocialIcon>
  );
};

export default SocialIcon;
