import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 20px;
  background-color: #${(props) => props.bg};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Ecommerce Store</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          excepturi ducimus voluptatibus distinctio tempore! Delectus voluptas
          explicabo neque sit accusantium vitae minus similique voluptate
          asperiores.
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="55acee">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Userful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wistlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room /> &nbsp; Lorem ipsum, dolor sit amet consectetur adipisicing
          elit.
        </ContactItem>
        <ContactItem>
          <Phone /> &nbsp; +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline /> &nbsp; thongth0497@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
