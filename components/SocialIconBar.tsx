import styled from 'styled-components';
import SocialIcon from '@components/SocialIcon';
import {
  TwitterIcon,
  GithubIcon,
  EmailIcon,
  LinkedInIcon,
} from '@icons/SocialIcons';

const StyledSocialIconBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  gap: 1.5rem;
`;

const SocialIconBar = () => {
  return (
    <StyledSocialIconBar>
      {SocialData.map((socialItem) => (
        <SocialIcon url={socialItem.url} key={socialItem.name}>
          {socialItem.icon}
        </SocialIcon>
      ))}
    </StyledSocialIconBar>
  );
};

export default SocialIconBar;

const SocialData = [
  {
    name: 'Twitter',
    icon: <TwitterIcon />,
    url: 'https://twitter.com/lemokami',
  },
  {
    name: 'Github',
    icon: <GithubIcon />,
    url: 'https://github.com/lemokami',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/in/jesswinw',
  },
  {
    name: 'Email',
    icon: <EmailIcon />,
    url: 'mailto:jesswinw@gmail.com',
  },
];
