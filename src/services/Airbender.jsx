export const fetchCharacters = () => {
  return fetch('http://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json());
};  
