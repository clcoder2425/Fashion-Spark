
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile } from "../responsive";

const Container = styled.div`
width: 100%;
height: 39vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}`

const Arrow = styled.div`
width: 40px;
height: 40px;

border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;`

const Wrapper = styled.div`
  height: 100%;

  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -70}vw);
`;
const Slide = styled.div`
width:135vh;
  height: 85vh;
  margin-top:12px;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height:60%;
  padding-bottom:350px;
  width:100%;
  
  
  
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  
  
`;

const InfoContainer = styled.div`
  flex: 1;
  width:100%;
  margin-bottom:300px;
  margin-right:200px;
  margin-right:100px;
  padding-right:150px;
  padding-bottom:100px;
  
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color:#34183e;
`;

const Desc = styled.p`
 
  font-size: 26px;
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 1.8;
  color:#061c21 ;
`;

const Button = styled.button`
  
font-size: 15px;
font-weight: 600;
background-color: transparent;
cursor: pointer;
color:#170a1c ;
border-style: none;
 
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};


export default Slider