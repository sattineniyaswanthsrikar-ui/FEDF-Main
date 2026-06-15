import { Routes, Route, Link, Outlet } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function Contact() {
  return(
    <div>
    <h1>Contact Page</h1>
    <p>Yaswanth</p>
    <p>9030423914</p>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h1>Products Page</h1>

      <nav>
        <Link to="car">Car</Link> |{" "}
        <Link to="bike">Bike</Link>
      </nav>

      <Outlet />
    </div>
  );
}

function CarProducts() {
  return <h2>Car Products</h2>;
}

function BikeProducts() {
  return <h2>Bike Products</h2>;
}

export default function NestedRouting() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}