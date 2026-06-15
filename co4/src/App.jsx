import ErrorBoundary from "./ErrorBoundary";
import BuggyComponent from "./BuggyComponent";

function App() {
  return (
    <div>
      <h1>React Error Boundary Example</h1>

      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>

      <h3>This part of the app still works!</h3>
    </div>
  );
}

export default App;

