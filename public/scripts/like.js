/* eslint-disable @typescript-eslint/restrict-template-expressions */

/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 */

function likeFreet(fields) {
    fetch(`/api/likes/freet/${fields.freetId}`, {method: 'PUT'})
    .then(showResponse)
    .catch(showResponse)
}