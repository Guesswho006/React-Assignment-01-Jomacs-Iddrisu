/**
Task: Change the code so:

If isLoggedIn is true ➔ show "Welcome back!"

If isLoggedIn is false ➔ show "Please log in."
 */

function Test07() {
  const isLoggedIn = false;

  return <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</h1>;
}

export default Test07;
