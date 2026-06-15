import { Routes, Route, Link, useParams } from "react-router-dom";

// Home Component
function Home() {
  return <h1>Home Page</h1>;
}

// User Component (Dynamic Route)
function User() {
  const { id } = useParams();

  return (
    <div>
      <h1>User Details</h1>
      <h2>User ID: {id}</h2>
    </div>
  );
}

// Main Component
export default function DynamicRouting() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/user/101">User 101</Link> |{" "}
        <Link to="/user/202">User 202</Link> |{" "}
        <Link to="/user/303">User 303</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </>
  );
}