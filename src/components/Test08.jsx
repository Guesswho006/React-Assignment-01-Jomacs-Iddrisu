/**
Task:

Use JSX to render a <ul> list of three favorite fruits.
 */

function Test08() {
  const fruits = ['Mango', 'Banana', 'Orange'];
  const fruitList = fruits.map((fruit) => <li key={fruit}>{fruit}</li>);
  return (
    {fruitList}
  );
}

export default Test08;
