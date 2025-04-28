/**
Task:

Use JSX to render a <ul> list of three favorite fruits.
 */

function Test08() {
  const fruits = ['Mango', 'Banana', 'Orange'];
  const fruitList = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
  return (
    <ul>{fruitList}</ul>
  );
}

export default Test08;
