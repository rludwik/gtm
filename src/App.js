import './App.css';
import { Outlet, Link } from "react-router-dom";


const addToCart = () => {
  window.dataLayer.push({
    'event': 'add to cart',
    'items': 1
   });
}

function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> |{" "}
        <Link to="/contact">Contact Us</Link> |{" "}
        <Link to="/subscribe">Subscribe</Link>
      </nav>
      <Outlet />
      <button onClick={addToCart()}>Add to Cart</button>
    </div>
  );
}

export default App;
