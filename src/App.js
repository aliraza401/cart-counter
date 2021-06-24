import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { Navbar } from "react-bootstrap";

function App() {
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    setCart([
      { item: 1, count: 0 },
      { item: 2, count: 0 },
      { item: 3, count: 0 },
      { item: 4, count: 0 },
    ]);
  }, []);

  const increment = (item) => {
    const newCart = cart.map((e) => {
      if (e.item === item) {
        const inc = e.count + 1;
        return { item: e.item, count: inc };
      }
      return e;
    });
    setCart(newCart);
  };

  const decrement = (item) => {
    const newCart = cart.map((e) => {
      if (e.item === item) {
        if (e.count === 0) {
          return e;
        }
        const inc = e.count - 1;
        return { item: e.item, count: inc };
      }
      return e;
    });
    setCart(newCart);
  };

  const Del = (item) => {
    const newCart = cart.filter((e) => e.item != item);
    setCart(newCart);
  };

  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          Cart Items:

          <span className="ms-3">{cart.length}</span>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>

      <div className="mt-5">
        <div className="item">
          {cart.map((e) => (
            <div className="mb-5" key={e.item}>
              <span> {e.count} </span>
              <button className="btn-info px-3 text-white" onClick={() => increment(e.item)}>+</button>
              <button className="btn-info px-3 text-white" onClick={() => decrement(e.item)}>-</button>
              <button className="btn-danger text-white" onClick={() => Del(e.item)}>delete </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
