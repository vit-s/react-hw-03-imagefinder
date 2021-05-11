let API = (srcQuery, page = 1) =>{
  const key = '21111393-6001b1f3c039d334af6d283f7'
  const url = `https://pixabay.com/api/?q=${srcQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=10`
  
  return fetch(url).then(res => res.json()).then(res => res.hits)
}


export default {
  API
}
