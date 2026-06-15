function BuggyComponent() {
  const students = null;

  // This will cause an error
  return <h2>Total Students: {students.length}</h2>;
}

export default BuggyComponent;

