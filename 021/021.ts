enum RequestType {
    GET = 'get',
    POST = 'post'
}
function fetchWithAuth(url: string, method: 'post' | 'get'){

}
fetchWithAuth('a', 'get');

let method = 'post';

fetchWithAuth('s', method as 'post')