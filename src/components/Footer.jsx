import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`

const Payment = styled.img`
  width: 50%;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const socialMedias = [
  { name: "Facebook", color: "3B5999" },
  { name: "Instagram", color: "E4405F" },
  { name: "Twitter", color: "55ACEE" },
  { name: "Pinterest", color: "E60023" },
]

const footerLinks = [
  "Home",
  "Cart",
  "Man Fashion",
  "Woman Fashion",
  "Accessories",
  "My Account",
  "Order Tracking",
  "Wishlist",
  "Wishlist",
  "Terms",
]

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOP</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          {socialMedias.map((socialMedia) => (
            <SocialIcon color={socialMedia.color} key={socialMedia.name}>
              {socialMedia.name === "Facebook" && <Facebook />}
              {socialMedia.name === "Instagram" && <Instagram />}
              {socialMedia.name === "Twitter" && <Twitter />}
              {socialMedia.name === "Pinterest" && <Pinterest />}
            </SocialIcon>
          ))}
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          {footerLinks.map((footerLink) => (
            <ListItem key={footerLink}>{footerLink}</ListItem>
          ))}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room />
          Addis Ababa Ethiopia
        </ContactItem>
        <ContactItem>
          <Phone />
          +251900026618
        </ContactItem>
        <ContactItem>
          <MailOutline />
          shop@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}
export default Footer
