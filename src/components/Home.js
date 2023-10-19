import '../styles/Home.scss';

export function Home({ user }) {
  return (
    <div>
      <h1 className="homeTitle">Welcome</h1>
      <h2 className="userName">{user}</h2>
    </div>
  );
}
