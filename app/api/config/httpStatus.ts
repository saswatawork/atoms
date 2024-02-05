// ref https://kinsta.com/blog/http-status-codes/

export const enum HTTP_STATUS {
    Success = 200,  // “Everything is OK.” This is the code that is delivered when a web page or resource acts exactly the way it’s expected to.
    Created = 201,  //“Created.” The server has fulfilled the browser’s request, and as a result, has created a new resource.
    Accepted = 202, //“Accepted.” The server has accepted your browser’s request but is still processing it. The request ultimately may or may not result in a completed response. 
    Moved = 301,    //“The requested resource has been moved permanently.” 
    BadRequest = 400, //“Bad Request.” The server can’t return a response due to an error on the client’s end.    
    UnAuthorized = 401, //“Unauthorized” or “Authorization Required.” This is returned by the server when the target resource lacks valid authentication credentials.
    Forbidden = 403, //“Access to that resource is forbidden.”
    NotFound = 404, //“The requested resource was not found.”
    ServerError = 500, // “There was an error on the server and the request could not be completed.” 
}   