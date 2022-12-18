import * as React from 'react';
 
//const title = 'React!';

const welcome = {
  greeting: 'Hey',
  title: 'React',
};

function getId(myId){
  return myId
}

function App(){
  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <h2>My Id: {getId(42)}</h2>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;