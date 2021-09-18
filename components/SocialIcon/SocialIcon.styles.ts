import styled from 'styled-components';

export type SocialIconType = {
  url: string;
  children: React.ReactNode;
  name: string;
};

export const StyledSocialIcon = styled.a`
  color: ${(props) => props.theme.text};
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border: 2px dashed transparent;
  cursor: pointer;

  &:hover {
    transition: border 0.5s ease;
    border-radius: 50%;
    border-color: ${(props) => props.theme.text};
  }

  &:focus {
    outline: none;
    border: 2px dashed ${(props) => props.theme.text};
  }

  @media screen and (max-width: 640px) {
    &:hover {
      border-color: transparent;
    }
  }
`;
