const getFilms = async () => {
   
  let response = await fetch('https://fakestoreapi.com/products')
  return response

}


export default getFilms;