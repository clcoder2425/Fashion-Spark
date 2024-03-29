import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #cec075  ;
`;

const Logo = styled.h1`
font-size: 25px;
  font-weight: 600;
  
  line-height: 1.8;
  color:#061c21 ;`
;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 15px;
  font-weight: 600;
 
  line-height: 1.8;
  color:#061c21 ;
`;

const SocialContainer = styled.div`
  display: flex;

`;

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
  background-color: #170a1c  ;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #cec075  ;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 40px;
  font-size: 25px;
  
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 1.8;
  color:#061c21 ;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  
  
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 1.8;
  color:#061c21 ;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #cec075  ;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Fashion Spark</Logo>
        <Desc>

        The ultimate destination for fashionistas on the hunt for the hottest trends.
         Our mission is to ignite your wardrobe with a dazzling array of styles that are sure to make you the envy of every runway. 
        So, buckle up and get ready to set the fashion world ablaze with Fashion Spark!

        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
         
          <ListItem>About Us</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Newsletter</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 1234 Somestreet , Anywhere USA 21212
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 999 99 99
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@contact.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;