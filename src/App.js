import './App.css';
import { Outlet, Link } from "react-router-dom";


const addToCart = () => {
  window.dataLayer.push({
    'event': 'add to cart',
    'items': 1
   });
}

const addToDataLayer = (incomingData) => {
  window.dataLayer.push({
    'event': 'page change',
    'page_changed_to': incomingData
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
        <Link onClick={() => addToDataLayer("Invoices")} to="/invoices">Invoices</Link> |{" "}
        <Link onClick={() => addToDataLayer("Expenses")} to="/expenses">Expenses</Link> |{" "}
        <Link onClick={() => addToDataLayer("Contact Us")} to="/contact">Contact Us</Link> |{" "}
        <Link onClick={() => addToDataLayer("Subscribe")} to="/subscribe">Subscribe</Link>
      </nav>
      <Outlet />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default App;
