export function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error fetching ToDo data:', error);
      return [];
    });
}

// fetchTodos().then((todos) => {
//   console.log(todos);
// });
