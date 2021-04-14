

const create = async (params, credentials, property) => {
    try {
      let response = await fetch('http://localhost:8080/api/property/by/'+ params.userId, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + credentials.t
          },
          body: property
        })
        return response.json()
      }catch(err) {
        console.log(err)
      }
  }

  //API to list property by landlord
const listByLandlord = async (params, credentials, signal) => {
  try {
    let response = await fetch('http://localhost:8080/api/property/by/'+ params.userId, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      }
    })
    return response.json()
  } catch(err) {
    console.log(err)
  } 
}

export {
    create,
    listByLandlord
}