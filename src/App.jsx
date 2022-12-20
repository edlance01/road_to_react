import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://react.js',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramox, Andrew Clarey',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
]

function List() {
  return (
    <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

const Welcome = () =>{
  return ("Welcome to our App!");
}

const Search = () => {

  const handleChange = (event) => {
    console.log(event);  //synthetic event 
    console.log(event.target.value);  //input HTML element
  };

  return (
    <div>
     <label htmlFor="search">Search Here:</label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}
  


function LogOut(){
  return (
    <div>
      alert("Are you sure you want to leave?");
    </div>
  );
}

const AddOne = (count) => {
  if(count > 0){
    count = count++;
  } else {
    count = 10;
  }
  return (
    <div>
       'The current count is ' +  count
    </div>
  ) 
}


function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
     
   
     <Welcome />

     
     <Search />
      <hr />

     
     <List />

     <LogOut />

     <br />
     <AddOne />

    </div>
  );
}

export default App;