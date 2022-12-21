import * as React from 'react';

const App = () => {
  console.log('App renders'); 
  const stories = [
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

  return (
    <div>
      <h1>My Hacker Stories</h1>


      <Welcome />


      <Search />
      <hr />


      <List list={stories} />

      <LogOut />

      <br />
      <AddOne />

    </div>
  );
};

const List = (props) => (
 
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
  
);
console.log('List renders'); 
const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);


const Welcome = () => {
  return ("Welcome to our App!");
}

const Search = () => {
  console.log('Search renders');  
  //searchTerm is current state, setSearchTerm is function to update state (state updater function)
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    
    // console.log(event.target.value);  
  };

  return (
    <div>
      <label htmlFor="search">Search Here:</label>
      <input id="search" type="text" onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}



function LogOut() {
  return (
    <div>
      alert("Are you sure you want to leave?");
    </div>
  );
}

const AddOne = (count) => {
  if (count > 0) {
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

export default App;