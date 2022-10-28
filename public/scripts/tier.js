/* eslint-disable @typescript-eslint/restrict-template-expressions */

function updateTier(fields){
    fetch(`/api/tiers/${fields.userId}`, {method: 'PUT', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function createTier(fields){
    fetch(`/api/tiers/${fields.userId}`, {method: 'POST', body: JSON.stringify(fields), headers: {'Content-Type': 'application/json'}})
        .then(showResponse)
        .catch(showResponse);
}

function getTier(fields){
    fetch(`/api/tiers/${fields.userId}`)
        .then(showResponse)
        .catch(showResponse);
}
