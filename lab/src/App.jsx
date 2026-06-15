function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

function App() {
  return (
    <Product name="Laptop" price="55000" />
  );
}
export default App;

