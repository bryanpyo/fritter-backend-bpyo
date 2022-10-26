/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

//  function viewAllComments(fields) {
//     fetch('/api/comments')
//       .then(showResponse)
//       .catch(showResponse);
//   }
  
function createComment(fields) {
    console.log(fields);
    fetch(`/api/comments?originalId=${fields.originalId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}
  