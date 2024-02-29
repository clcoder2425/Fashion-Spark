import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

  

const Container = styled.div`
  height: 30vh;
  width:40vh;
  background-color: #F8F9FA ;
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 20px;
  
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 50px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Product</Title>
      <Desc>Product Description</Desc>
      <div>
      <Desc>Add to Cart &nbsp;&nbsp;&nbsp; </Desc>
        <Button>
          <Send />
        </Button>
        </div>
     
    </Container>
  );
};

export default Newsletter;