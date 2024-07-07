export const exerciseOptions = {
    method: 'GET',
     headers: {
      
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key':'9c5c65c615mshb949c293b06efd4p1f49fajsn37c5fd073621'
      
    }
  };

export const youtubeOptions = {
  method: 'GET',
  // url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  // params: {
  //   id: 'UCE_M8A5yxnLfW0KghEeajjw'
  // },
  headers: {
    'x-rapidapi-key': '9c5c65c615mshb949c293b06efd4p1f49fajsn37c5fd073621',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};
export const fetchData = async(url , options) => {
    const response = await fetch (url , options) ; 
    const data = await response.json() ; 


    return data 
}