import "../styles/App.scss";
import Navigation from "./Navigation";
import NewsFeed from "./NewsFeed";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className="container">
          <NewsFeed />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
