const greeting = 'Hello World'
// console.log(greeting)

// const getData = async (url) => {
//   const response = await fetch(url)
//   const result = await response.json()
//   console.log(result)
// };

// getData('https://jsonplaceholder.typicode.com/posts')


const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result = await response.json()
  return result
};

getData().then(posts => console.log(posts))
