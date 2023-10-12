import React , {useState} from 'react';
import {
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  Collapse,
  NavbarToggler
} from 'reactstrap';
import './Navi.css'
import { Link , BrowserRouter as Router} from 'react-router-dom';

function Navi({ card, removeCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      {card.length > 0 ?
        <>
          <NavbarBrand href="/">SEPET APP</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar></Collapse>
          <UncontrolledDropdown  inNavbar >
            <DropdownToggle nav caret>
              BUCKET 
            </DropdownToggle>
            <DropdownMenu end>
              {
                card.map((item) => (
                  <DropdownItem key={item.product.id}>
                    <Badge color='danger' onClick={() => removeCard(item.product)}>X</Badge>
                    {item.product.productName}: <Badge color='success'>{item.quantity}</Badge>
                  </DropdownItem>
                ))
              }
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/card">Go to bucket</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
        :
        <>
          <NavbarBrand href="/">SEPET APP</NavbarBrand>
          EMPTY CARD
        </>
      }
    </div>
  );
}

export default Navi;
