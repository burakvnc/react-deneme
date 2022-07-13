import Logo from "./logo.svg";
function App() {
  return (
    <div className="App">
      {process.env.NODE_ENV === "production" && <img src={Logo} alt=""></img>}
    </div>
  );
}
export default App;
