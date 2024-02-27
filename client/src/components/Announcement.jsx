import styled from 'styled-components'
const Container = styled.div`
hieght: 30px;

background-image: linear-gradient( 135deg,#edd2e0 5%, #F8F9FA 170%);
 
color: #170a1c;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;`


const Announcement = () => {
  return (
    <Container>Spark ⚡ Deal ! Free Shipping on Orders Over $50</Container>
  )
}

export default Announcement