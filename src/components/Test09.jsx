/**
Task:

Create a button that says "Click Jomacs!" where "Jomacs" is a JavaScript variable.
 */

function Test09() {
  const name = "Jomacs";

  return (
    <button onClick={()=>{
      alert(`Clicked ${name}`);
    }}>Click Me</button>
  );
}

export default Test09;
