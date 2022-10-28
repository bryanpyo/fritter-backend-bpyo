/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function updateFame(fields){
    fetch(`/api/fame/${fields.userId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function createFame(fields){
    fetch(`/api/fame/${fields.userId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function getFame(fields){
    fetch(`/api/fame/${fields.userId}`)
        .then(showResponse)
        .catch(showResponse);
}
//  function viewAllFreets(fields) {
//     fetch('/api/freets')
//       .then(showResponse)
//       .catch(showResponse);
//   }
  
//   function viewFreetsByAuthor(fields) {
//     fetch(`/api/freets?author=${fields.author}`)
//       .then(showResponse)
//       .catch(showResponse);
//   }
  
//   function createFreet(fields) {
//     console.log(fields)
//     fetch('/api/freets', {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
//       .then(showResponse)
//       .catch(showResponse);
//   }
  
//   function editFreet(fields) {
//     fetch(`/api/freets/${fields.id}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
//       .then(showResponse)
//       .catch(showResponse);
//   }
  
//   function deleteFreet(fields) {
//     fetch(`/api/freets/${fields.id}`, {method: 'DELETE'})
//       .then(showResponse)
//       .catch(showResponse);
//   }
  