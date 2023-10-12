import React, { useState, useEffect } from 'react'
import { Col, ListGroup, ListGroupItem, Table, Row, Button } from 'reactstrap'

function ProductList({ currentCategory, addCard }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => {
        filterProductsByCategory(data, currentCategory.id);
      });
  }, [currentCategory.id]);

  const filterProductsByCategory = (products, categoryId) => {
    const filtered = products.filter(product => product.categoryId === categoryId);
    setFilteredProducts(filtered);
  };
  
  return (
    <>
      <h1>PRODUCT LIST - {currentCategory.seoUrl}</h1>
      <Table style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Units In Stock</th>
            <th>Unit Price</th>
          </tr>
        </thead>
      </Table>
      <ListGroup style={{ textAlign: "center" }}>
        {
          filteredProducts.map((product) => {
            return <ListGroupItem key={product.id}>
              <Row>
                <Col>{product.productName}</Col>
                <Col>{product.unitsInStock}</Col>
                <Col>{product.unitPrice}</Col>
                <Col><Button color="info" onClick={() => addCard(product)}>Add</Button></Col>
              </Row>
            </ListGroupItem>
          })
        }

      </ListGroup>

    </>
  )
}

export default ProductList
