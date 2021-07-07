export const fetchCharacters = () => {
  return fetch(`http://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${8}?pages=${10}
  `)
    .then(res => res.json());
};  
