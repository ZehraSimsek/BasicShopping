import React, { useState } from "react";
import Navi from "./Component/Navi";
import CategoryList from "./Component/CategoryList";
import ProductList from "./Component/ProductList";
import CardList from "./Component/CardList"; // CardList'i içe aktardık
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import alertify from 'alertifyjs';
import NotFound from './Component/NotFound.js'

function App() {
  const [currentCategory, setCurrentCategory] = useState({});
  const [card, setCard] = useState([]);

  const addCard = (product) => {
    let newCard = [...card];
    let addedItem = newCard.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCard.push({ product: product, quantity: 1 });
    }
    setCard(newCard);
    alertify.notify("`" + product.productName + "`" + " added to card", "success");
  };

  const removeCard = (product) => {
    let newCard = card.filter((c) => c.product.id !== product.id);
    setCard(newCard);
    alertify.notify("`" + product.productName + "`" + " removed from card", "error");
  };

  return (
    <div>
      <Router> {/* Navi dışında sadece bir Router kullanın */}
        <Navi card={card} removeCard={removeCard} />
        <Container>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
              />
            </Col>
            <Col xs="9">
              <Switch>
                <Route path="/" exact>
                  <ProductList currentCategory={currentCategory} addCard={addCard} />
                </Route>
                <Route path="/card">
                  <CardList card={card} removeCard={removeCard} />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
