/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

 function viewAllReFreets(fields) {
    fetch('/api/refreets')
      .then(showResponse)
      .catch(showResponse);
  }
  
  function viewReFreetsByAuthor(fields) {
    fetch(`/api/refreets?author=${fields.author}`)
      .then(showResponse)
      .catch(showResponse);
  }
  
  function createReFreet(fields) {
    console.log("HELLO?");
    console.log(fields);
    fetch(`/api/refreets/${fields.originalId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }
  
  function editReFreet(fields) {
    fetch(`/api/refreets/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
      .then(showResponse)
      .catch(showResponse);
  }
  
  function deleteReFreet(fields) {
    fetch(`/api/refreets/${fields.id}`, {method: 'DELETE'})
      .then(showResponse)
      .catch(showResponse);
  }
  