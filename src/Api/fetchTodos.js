// Function to fetch all ToDo items from JSONPlaceholder
export function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/1/todos';

  // Use the Fetch API to make the GET request
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

// Example usage
fetchTodos().then((todos) => {
  console.log(todos);
});
