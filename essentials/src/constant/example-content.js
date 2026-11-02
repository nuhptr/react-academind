export const EXAMPLE_CONTENT = [
   {
      components: `Components are the building blocks of a React application.

function Greeting() {
   return <h1>Hello!</h1>;
}`,
   },
   {
      jsx: `JSX lets you write HTML-like syntax in JavaScript.

const element = <h1>Hello, world!</h1>;`,
   },
   {
      props: `Props let a parent pass data to a child component.

function Greeting({ name }) {
   return <h1>Hello, {name}!</h1>;
}

<Greeting name="Ada" />`,
   },
   {
      state: `State stores data that can change over time and trigger a re-render.

import { useState } from "react";

function Counter() {
   const [count, setCount] = useState(0);

   return (
      <button onClick={() => setCount(count + 1)}>
         Clicked {count} times
      </button>
   );
}`,
   },
]
