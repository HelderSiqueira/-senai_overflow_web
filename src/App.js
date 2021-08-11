function Page1(){
  return <h1>Esta é a pagina 1</h1>;
}

function Page2(){
  return <h1>Esta é a pagina 2</h1>;
}

function App() {

  let currentPage = 2;

  return (
    <div className="App">
      {currentPage === 1 ? <Page1/> : <Page2/>}
    </div>);
}

export default App;
