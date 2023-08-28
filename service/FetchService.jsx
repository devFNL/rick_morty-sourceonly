async function getAllChars() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  return response.json();
}

async function getPages(page) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  return response.json();
}

async function getCharById(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.json();
}

async function getCharByName(name) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?name=${name}`
  );
  return response.json();
}

export { getAllChars, getCharById, getCharByName, getPages };
