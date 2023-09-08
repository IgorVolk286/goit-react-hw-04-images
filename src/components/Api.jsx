// import axios from 'axios';

// export const FetchApi = async (search, page) => {

//   const responce = await axios.get('https://api.example.com', {
//     params: {
//       page,
//       search,
//       key: '38330111-6d0efda7f4a8d995231e14698',
//       image_type: 'photo',
//       orientation: 'horizontal',
//       per_page: '12',
//     },
//   });

//   return responce.data;
// };

export const fetchApi = (search, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=38330111-6d0efda7f4a8d995231e14698&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
};
