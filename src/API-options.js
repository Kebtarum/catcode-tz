import * as axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest',
//     options:{
//       method: "POST",
//       mode: "cors",
//       headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//           "Authorization": "Token " + "51546c8e1e173abdcd1642337144847963b066dc"
//       },
//       body: JSON.stringify({query: "москва хабар"})
//     }
//   })

var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
var token = "51546c8e1e173abdcd1642337144847963b066dc";
// var query = "москва хабар";

var options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
    },
    // body: JSON.stringify({query: query})
}

export const postAPI = {
    
    postQuery(query) {
        options.body = JSON.stringify({query: query})
        return fetch(url, options)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .then(result => {return result.json()})
        .catch(error => console.log("error", error));


        // return instance.post('/address'
        //     // {
        //     //     body: {"query": query}
        //     // }
        // )
        //     .then(result => console.log(result.data))
        //     .catch(error => console.log("error", error));;
    }
}


// var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
// var token = "51546c8e1e173abdcd1642337144847963b066dc";
// var query = "москва хабар";

// var options = {
//     method: "POST",
//     mode: "cors",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         "Authorization": "Token " + token
//     },
//     body: JSON.stringify({query: query})
// }

// fetch(url, options)
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log("error", error));

