/* eslint-disable @typescript-eslint/restrict-template-expressions */


function followUser(fields){
    fetch(`/api/followers/${fields.followingId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function unfollowUser(fields){
    fetch(`/api/followers/${fields.followingId}`, {method: 'DELETE'})
        .then(showResponse)
        .catch(showResponse);
}