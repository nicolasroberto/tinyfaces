import { useState } from 'react';
import AddButton from './components/AddButton';
import RefreshAll from './components/RefreshAll';
import CardList from './components/CardList';

export async function getServerSideProps() {
  /* The function "pre-Fetches" in server side the first 5 posts in server. */
  const response = await fetch('https://tinyfac.es/api/data?limit=5&quality=0');
  const data = await response.json();
  return { props: { data } };
}
/* Then, the data returned by getServerSideProps is inserted as defaul data in posts */
export default function App({ data }) {
  /* we set the state */
  const [posts, setPosts] = useState([...data]);

  /* Fetchs a single user pressin "+" button function*/
  async function fetchOneUser() {
    let response = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    let postFetched = await response.json();
    setPosts(
      /* We add in "posts" the single element fetchet */
      [...posts, postFetched[0]],
    );
  }

  async function refreshOneUser(id) {
    let response = await fetch('https://tinyfac.es/api/data?limit=1&quality=0');
    let postFetched = await response.json();
    let reFetch = [...posts];
    /* Here, the clicked picture runs this functions and fetches a new element from the API and is replaced using the ID number */
    reFetch[id] = postFetched[0];
    setPosts(reFetch);
  }

  async function refreshEveryUser(e) {
    /* For each element we fetched in "posts", we run the "refresh one user" funtion again to replace all pictures */
    posts.forEach((user, id) => {
      refreshOneUser(id);
    });
  }

  return (
    <div className="App">
      <ul>
        {posts.map((posts, id) => {
          return <CardList onClick={() => refreshOneUser(id)} key={posts.id} url={posts.url} />;
        })}
        <AddButton onClick={fetchOneUser} />
      </ul>
      <RefreshAll onClick={refreshEveryUser} />
    </div>
  );
}
