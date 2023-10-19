import '../styles/Home.scss';

export function Home({ user, setUser }) {

    const handleLogout = () => {
        setUser([])
    }

  return (
    <div className="homeContainer">
      <h1 className="homeTitle">Welcome</h1>
      <h2 className="userName">{user}</h2>
      <button className="button" onClick={handleLogout}>Log out</button>
    </div>
  );
}
