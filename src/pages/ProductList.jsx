import styled from "styled-components"
import NavBar from "../components/NavBar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Footer from "../components/Footer"
import NewsLetter from "../components/NewsLetter"
import { mobile } from "../responsive"

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column"
  })}
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    marginRight: "0px"
  })}
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: transparent;
  border: 1px solid black;
  ${mobile({
    margin: "10px 0px"
  })}
`

const Option = styled.option`
`

const colorOptions = ["White", "Black", "Red", "Blue", "Yellow", "Green"]
const sizeOptions = ["XS", "S", "M", "L", "XL"]

const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            {colorOptions.map((color) => (
              <Option>{color}</Option>
            ))}
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            {sizeOptions.map((size) => (
              <Option>{size}</Option>
            ))}
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  )
}
export default ProductList
