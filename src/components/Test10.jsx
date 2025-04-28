/**
Task:

If isAdmin is true, display <h2>Admin Panel</h2>. Otherwise, show nothing. Use the logical AND operator (&&).
 */

function Test10() {
  const isAdmin = true;

  return (
    <div>
    {isAdmin && <h2>Admin Panel</h2>}
    </div>
  );
}

export default Test10;
