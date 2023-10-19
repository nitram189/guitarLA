


////////////// GET COURSE BY URL //////////////////

// export async function getCourse() {
//     const res = await fetch(`${ process.env.API_URL }/course?populate=*`)
  
//     if( !res.ok ) {
//       throw new Error('Oops, something went wrong :/')
//     }
//     const { data } = await res.json()
  
//     const mappedData = {
//       title: data.attributes.title,
//       description: data.attributes.description,
//       imageUrl: data?.attributes?.image?.data?.attributes?.formats?.large?.url
//     }
  
//     return mappedData
// }

////////////// GET BLOG //////////////////

// export async function getBlog() {

//   const blogRef = collection(db, "blogs");

//   const res = await getDocs( blogRef );

//   if ( !res.ok ) {
//     throw new Error('Oops, something went wrong :/');
//   }
//   const data = await res.json();
//   console.log(data)

//   if (!data) {
//     return []
//   }

//   return data
    
  //   const mappedData = data?.map(({ attributes, id }) => {
  //     const { title, content, url: slug, publishedAt, image } = attributes;

  //     const mappedDataImage = image?.data?.map(({ id, attributes }) => {
  //       const { url: imageUrl } = attributes;

  //       return { id, imageUrl }
  //     })

  //     return { id, title, content, slug, publishedAt, mappedDataImage }
  // })
  
  //   return mappedData
//}


////////////// GET POST BY URL //////////////////

// export async function getPostByUrl( url ) {
//     const res = await fetch(`${ process.env.API_URL }/blogs?filters[url]=${ url }&populate=*`)

//     if( !res.ok ) {
//       throw new Error('Oops, something went wrong')
//     }
//     const { data } = await res.json()

//     const mappedData = data?.map(({ attributes, id }) => {
//         const { title, content, publishedAt } = attributes;
//         const { url: imageUrl } = attributes?.image?.data?.attributes?.formats?.medium

//         return { id, title, content, publishedAt, imageUrl }
//     })

//     return mappedData
// }

// ////////////// GET GUITAR BY URL //////////////////

// export async function getGuitarByUrl( url ){
//   const res = await fetch(`${ process.env.API_URL }/guitars?filters[url]=${ url }&populate=image`)

//   if( !res.ok ){
//       throw new Error('Oops! Something went wrong :/')
//   }

//   const { data } = await res.json();

//   const mappedData = data.map(({ id, attributes }) => {
//       const { name, price, url, description, image } = attributes;
//       const { url: imageUrl } = image?.data?.attributes

//       return { id, name, price, url, description, imageUrl }
//   })

//   return mappedData
// }

////////////// GET GUITARS //////////////////

// export async function getGuitars() {
//   const res = await fetch(`${ process.env.API_URL }/guitars?populate=image`)

//   if( !res.ok ){
//     throw new Error('Oops, something went wrong :/')
//   }
//   const { data } = await res.json()

//   const mappedData = data?.map(({ id, attributes }) => {
//     const { name, price, description, image, url } = attributes;
//     const { url: imageUrl } = image?.data?.attributes?.formats?.medium

//     return { id, name, price, description, imageUrl, url }
//   })
  
//   return mappedData
// }


