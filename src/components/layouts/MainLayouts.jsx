
function MainLayout(props) {
  console.log(props);
  return (
    <>
      <nav style={{ border: "solid black 1px", padding: "1em" }}>search bar goes here
        <input type="text" placeholder="Search" onChange={(e) => props.filterCharactersSearchbar(e.target.value)
        } />
        {/* onChange={handleSearch} */}
      </nav>
      {props.children}
      <footer style={{ border: "solid black 1px", padding: "1em" }}>
        here is footer
      </footer>
    </>
  );
}

function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  // Implement the search logic here, such as filtering or fetching data
}

export default MainLayout