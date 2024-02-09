import React from 'react';

class PokeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      pokemonData: null,
      error: null,
      isLoading: false,
    };
  }

  handleSearch = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchTerm}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      this.setState({ pokemonData: data, error: null });
    } catch (error) {
      this.setState({ pokemonData: null, error: error.message });
    }
    this.setState({ isLoading: false });
  };

  render() {
    const { searchTerm, pokemonData, error, isLoading } = this.state;
    return (
      <div>
        <h1>Pokemon Search</h1>
        <input
          type="text"
          value={searchTerm}
          id="pokesearch"
          onChange={(e) => this.setState({ searchTerm: e.target.value })}
        />
        <button onClick={this.handleSearch} disabled={isLoading}>Search</button>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {pokemonData && (
          <div>
            <h2>{pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          </div>
        )}
      </div>
    );
  }
}

export default PokeSearch;