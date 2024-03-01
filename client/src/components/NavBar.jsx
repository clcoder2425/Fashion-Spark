import {Link} from 'react-router-dom';
// import Search from '@mui/icons-material/Search';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { SearchOutlined} from '@mui/icons-material';
import { mobile } from "../responsive";

const Container = styled.div`

color:#34183e;
margin-top: 10px;




width: 100%;
height: 90px;

${mobile({ height: "50px" })}

}`
const Wrapper = styled.div`
padding: 10px 20px;

text-align: center;
font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;



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
color:#170a1c;
text-align: center;
font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
font-size: 12px;
cursor: pointer;


margin-left: 9px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}`

const Center = styled.div`
flex: 1;

text-align: center;`

const Right = styled.div`
flex: 1;
display: flex;
padding-left:720px;
font-weight: 600;
aicn-items: center;
jcstify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`

const Language = styled.span`
text-align: center;
font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
font-size: 15px;
font-weight: bold;
cursor: pointer;
margin-left: 25px;
cursor: pointer;
${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  border-bottom-width: 5px;
  padding-top: 1px;
  padding-right: 1px;
  padding-bottom: 1px;
  margin-left: 30px;
  margin-bottom: 30px;
  height: 10px;

 

  padding: 10px;`

const Input = styled.input`
border: none;
size: 10%;
${mobile({ width: "50px" })}
`
const Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "70px" })}
`


const Navbar = () => {
  
  return (
    <Container>
      <div className="header">
      <Center>
                <Logo style={{color:"#170a1c", fontSize:"70px",  }}>Fashion Spark </Logo>
                </Center>
                </div>
        <Wrapper>
            <Left><Language style={{color:"#170a1c", fontSize:"12px" }}>
                EN
            </Language>
            <SearchContainer>
              <Input placeholder="Search"/>
                <SearchOutlined style={{color:"#170a1c", fontSize:"15px" }}/>
            </SearchContainer>
            </Left>
            
            <Right>
            <Link to="/">
                <MenuItem >Home</MenuItem>
                </Link>
              <Link to="/register">
                <MenuItem >REGISTER</MenuItem>
                </Link>
                <Link to="/login">
                <MenuItem>SIGN IN</MenuItem>
                </Link>
                
                <Link to="/cart">
                  <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                    </MenuItem>
                </Link>
                
            </Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar