async function fetchCharactersAsync() {
  setSearchTerm('');
  setSearchResults([]);

  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const characters = data.results;

    const updateResults = async (searchTerm) => {
      setSearchResults(
        [...characters].filter((character) =>
          character.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    };

    const handleInputChange = (e) => {
      const searchTerm = e.target.value.toLowerCase();
      updateResults(searchTerm);
    };

    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
      searchBar.addEventListener('input', handleInputChange);
    }
  } catch (error) {
    console.error(error);
  }
}