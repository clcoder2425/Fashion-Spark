// import React, { useState } from 'react';
// import {
//     MDBContainer,
//     MDBNavbar,
//     MDBNavbarBrand,
//     MDBNavbarToggler,
//     MDBIcon,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBDropdown,
//     MDBDropdownToggle,
//     MDBDropdownMenu,
//     MDBDropdownItem,
//     MDBDropdownItemlink,
//     MDBCollapse,
//     MDBRipple,
//     MDBBadge,
//     MDBInput,
//     MDBListGroup,
//     MDBListGroupItem
// } from 'mdb-react-ui-kit';
// import './Styles/NavBar.css';
// export default function NavBar(currentPage, handlePageChange) {
//     const [showShow, setShowShow] = useState(false);

//     const toggleShow = () => setShowShow(!showShow);

//     return (
//         <>
//             {/* <link
//                 href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
//                 rel="stylesheet"
//             /> */}
//             <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
//                 <div className="position-sticky">
//                     <MDBListGroup flush className="mx-3 mt-4">

//                         <MDBRipple rippleTag='span'>
//                             <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded'>
//                             onClick={() => handlePageChange('Home')}
//                                 <MDBIcon fas icon="tachometer-alt me-3" />
//                                 Home
//                             </MDBListGroupItem>
//                         </MDBRipple>

//                         <MDBRipple rippleTag='span'>
//                             <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' active aria-current='true'>
//                             onClick={() => handlePageChange('Web traffic')}
//                                 <MDBIcon fas icon="chart-area me-3" />
//                                 Website traffic
//                             </MDBListGroupItem>
//                         </MDBRipple>

//                         <MDBRipple rippleTag='span'>
//                             <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
//                             onClick={() => handlePageChange('Categories')}
//                                 <MDBIcon fas icon="lock me-3" />
//                                 Categories
//                             </MDBListGroupItem>
//                         </MDBRipple>

//                         <MDBRipple rippleTag='span'>
//                             <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
//                             onClick={() => handlePageChange('Orders')}
//                                 <MDBIcon far icon="chart-bar me-3" />
//                                 Orders
//                             </MDBListGroupItem>
//                         </MDBRipple>


//                         <MDBRipple rippleTag='span'>
//                             <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
//                             onClick={() => handlePageChange('Register')}
//                                 <MDBIcon fas icon="users me-3" />
//                                 Register
//                             </MDBListGroupItem>
//                         </MDBRipple>

//                         <MDBRipple rippleTag='span'>
//                             <MDBListGroupItem tag='a' href='#' action className='border-0 rounded'>
//                             onClick={() => handlePageChange('Sign in')}
//                                 <MDBIcon fas icon="money-bill me-3" />
//                                 Sign in
//                             </MDBListGroupItem>
//                         </MDBRipple>
//                     </MDBListGroup>
//                 </div>
//             </MDBCollapse>

//             <MDBNavbar expand='lg' light bgColor='light'>
//                 <MDBContainer fluid>
//                     <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
//                         <MDBNavbarToggler
//                             type='button'
//                             aria-label='Toggle navigation'
//                             onClick={toggleShow}
//                         >
//                             <MDBIcon icon='bars' fas />
//                         </MDBNavbarToggler>
//                         <MDBNavbarBrand href='#'>
//                             <img
//                                 src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
//                                 height='30'
//                                 alt=''
//                                 loading='lazy'
//                             />
//                         </MDBNavbarBrand>

//                         <MDBCollapse navbar>
//                             <MDBNavbarItem className="d-flex align-items-center">
//                                 <MDBInput label='Search (ctrl + "/" to focus)' id='form1' type='text' />
//                                 <MDBIcon fas icon="search mx-2" />
//                             </MDBNavbarItem>
//                         </MDBCollapse>


//                     </MDBNavbarNav>
//                     <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">

//                         <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
//                             <MDBDropdown>

//                                 <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
//                                     <MDBIcon fas icon="bell" />
//                                     <MDBBadge color='danger' notification pill>
//                                         1
//                                     </MDBBadge>
//                                 </MDBDropdownToggle>

//                                 <MDBDropdownMenu>
//                                     <MDBDropdownItem>
//                                         <MDBDropdownItemLink href="#">Some news</MDBDropdownItemLink>
//                                     </MDBDropdownItem>
//                                     <MDBDropdownItem>
//                                         <MDBDropdownItemLink href="#">Another news</MDBDropdownItemLink>
//                                     </MDBDropdownItem>
//                                     <MDBDropdownItem>
//                                         <MDBDropdownItemLink href="#">Something else here</MDBDropdownItemLink>
//                                     </MDBDropdownItem>
//                                 </MDBDropdownMenu>
//                             </MDBDropdown>
//                         </MDBNavbarItem>


//                         <MDBNavbarItem className='me-3 me-lg-0'>
//                             <MDBNavbarLink href='#'>
//                                 <MDBIcon fas icon='fill-drip' />
//                             </MDBNavbarLink>
//                         </MDBNavbarItem>
//                         <MDBNavbarItem className='me-3 me-lg-0'>
//                             <MDBNavbarLink href='#'>
//                                 <MDBIcon fas icon='shopping-cart' />
//                             </MDBNavbarLink>
//                         </MDBNavbarItem>

//                         <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
//                             <MDBDropdown>

//                                 <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
//                                     <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22" alt="" loading="lazy" />
//                                 </MDBDropdownToggle>

//                                 <MDBDropdownMenu>
//                                     <MDBDropdownItem>
//                                         <MDBDropdownItemLink href="#">My profile</MDBDropdownItemLink>
//                                     </MDBDropdownItem>
//                                     <MDBDropdownItem>
//                                         <MDBDropdownItemLink href="#">Settings</MDBDropdownItemLink>
//                                     </MDBDropdownItem>
//                                     <MDBDropdownItem>
//                                         <MDBDropdownItemLink href="#">Logout</MDBDropdownItemLink>
//                                     </MDBDropdownItem>
//                                 </MDBDropdownMenu>
//                             </MDBDropdown>
//                         </MDBNavbarItem>
//                     </MDBNavbarNav>

//                 </MDBContainer>
//             </MDBNavbar>
//         </>
//     );
// }
const Navbar = () => {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>LAMA.</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    );
  };
  
  export default Navbar;



