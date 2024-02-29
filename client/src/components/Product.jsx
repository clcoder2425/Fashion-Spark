// import { Send } from "@mui/icons-material";
// import {Link} from 'react-router-dom';
// import {
//   favoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@mui/icons-material";

// import styled from "styled-components";
// import { mobile } from "../responsive";

// const Container = styled.div`
//   height: 30vh;
//   width:40vh;
//   background-color: #F8F9FA ;
//   display: flex;
//   margin: 10px;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;
// const Title = styled.h1`
//   font-size: 20px;
//   margin-bottom: 20px;
// `;

// const Desc = styled.div`
//   font-size: 15px;
//   font-weight: 300;
//   margin-bottom: 20px;
  
//   ${mobile({ textAlign: "center" })}

// `;

// const InputContainer = styled.div`
//   width: 50%;
//   height: 40px;
//   background-color: white;
//   display: flex;
//   justify-content: space-between;
//   border: 1px solid lightgray;
//   ${mobile({ width: "80%" })}
// `;

// const Input = styled.input`
//   border: none;
//   flex: 8;
//   padding-left: 50px;
// `;

// const Button = styled.button`
//   flex: 1;
//   border: none;
  
//   background-color: teal;
//   color: white;
// `;

// const Newsletter = () => {
//   return (
//     <Container>
//       <Title>Product</Title>
//       <Desc>Product Description</Desc>
//       <div>
//       <Desc>Add to Cart &nbsp;&nbsp;&nbsp; </Desc>
//         <Button>
//           <Send />
//         </Button>
//         </div>
     
//     </Container>
//   );
// };

// export default Newsletter;
import { Link } from "react-router-dom";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";
  import styled from "styled-components";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  
  const Product = ({ item }) => {
    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            
          </Icon>
          <Icon>
            <Link to={`/product/${item._id}`}><SearchOutlined /></Link>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product;