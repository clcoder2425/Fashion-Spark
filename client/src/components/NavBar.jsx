import React from 'react'
// import Search from '@mui/icons-material/Search';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { SearchOutlined} from '@mui/icons-material';
import { mobile } from "../responsive";

const Container = styled.div`
height: 10px;
${mobile({ height: "50px" })}

}`
const Wrapper = styled.div`
padding: 10px 20px;
 ;
letter-spacing: 2px;

color:#170a1c;
display: flex;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}`

const Left = styled.div`
flex: 1;
display: flex;

aign-items: center;
`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}`

const Center = styled.div`
flex: 1;
text-align: center;`

const Right = styled.div`
flex: 1;
display: flex;
padding-left:750px;
aicn-items: center;
jcstify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;`

const Input = styled.input`
border: none;
size: 10%;
${mobile({ width: "50px" })}
`
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`


const Navbar = () => {
  return (
    <Container>
      <div class="header">
      <Center>
                <Logo style={{color:"#170a1c", fontSize:"100" }}>Fashion Spark </Logo>
                </Center>
                </div>
        <Wrapper>
            <Left><Language style={{color:"#170a1c", fontSize:"2" }}>
                EN
            </Language>
            <SearchContainer>
              <Input placeholder="Search"/>
                <SearchOutlined style={{color:"#170a1c", fontSize:"16" }}/>
            </SearchContainer>
            </Left>
            
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar