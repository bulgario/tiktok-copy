import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon></Icon>
          <Avatar>
            <img src="https://p77-sign-sg.tiktokcdn.com/tos-maliva-avt-0068/6742470a81c1883180a7717c41e03b66~c5_100x100.jpeg?x-expires=1611428400&x-signature=%2BdL%2BWZyvHTOCw6Nf8G9PO%2FXUurs%3D" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
}

export default Header;