import styled from "styled-components";
import { mobile } from "../../responsive";
import React from 'react'
import Announcement from '../Announcement';
import NavBar from '../NavBar';


const Container = styled.div`
width: 100vw;
margin-left:-390px;
  height: 100vh;
  
  background: linear-gradient(
      rgba(0, 2, 5, 0.1),
      rgba(255, 100, 50, 0.1)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: 110%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: #F8F9FA ;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`;

const Agreement = styled.span`

font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
font-size: 15px;
  margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`;

const Register = () => {
  return (
    
    
    <Container>
      

    
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          
          
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
        
      </Wrapper>
      
    </Container>
  );
};

export default Register;