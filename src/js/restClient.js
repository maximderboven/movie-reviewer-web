const BASEURL = 'http://localhost:3000/movies';

export function postMovie (movie) {
    return fetch(BASEURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
        .then(function (response) {
            if (!response.ok) {
                throw Error(
                    'Unable to POST the Movie: ' +
                    response.status +
                    ' ' +
                    response.statusText
                );
            }
            return response.json();
        })
        .catch(function (e) {
            console.error(e);
            throw Error(e);
        });
}

export function deleteMovie (id) {
    return fetch(BASEURL + '/' + id, {
        method: 'DELETE'
    })
        .then(function (response) {
            if (!response.ok) {
                throw Error(
                    'Unable to DELETE the Movie: ' +
                    response.status +
                    ' ' +
                    response.statusText
                );
            }
            return response.json();
        })
        .catch(function (e) {
            console.error(e);
            throw Error(e);
        });
}

export function getMovie (id) {
    return fetch(BASEURL + '/' + id)
        .then(function (response) {
            if (!response.ok) {
                throw Error(
                    'Unable to GET the Movie: ' +
                    response.status +
                    ' ' +
                    response.statusText
                );
            }
            return response.json();
        })
        .catch(function (e) {
            console.error(e);
            throw Error(e);
        });
}


export async function getMovies () {
    return  await fetch(BASEURL)
        .then(function (response) {
            if (!response.ok) {
                throw Error(
                    'Unable to GET the Movies: ' +
                    response.status +
                    ' ' +
                    response.statusText
                );
            }
            return response.json();
        })
        .catch(function (e) {
            console.error(e);
            throw Error(e);
        });
}
export function putMovie(id,Movie){
    return fetch(BASEURL + '/' + id,  {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Movie)
    })
        .then(function (response) {
            if (!response.ok) {
                throw Error(
                    'Unable to PUT the Movie: ' +
                    response.status +
                    ' ' +
                    response.statusText
                );
            }
            return response.json();
        })
        .catch(function (e) {
            console.error(e);
            throw Error(e);
        });
}


