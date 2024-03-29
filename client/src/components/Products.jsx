import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";


const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #FFFDFA;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;