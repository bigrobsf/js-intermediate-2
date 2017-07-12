### What is HTTP?
HTTP is a protocol that defines how information should be transmitted between clients and servers and specifies how they should interact. It is used by every web site on the internet.

### What is a URL?
The Uniform Resource Locator is a string that we enter into a browser to access information on a web server.

### What is TCP?
Transfer Control Protocol is a set of rules for transferring information between a client and a server or between servers that guarantees that all data is transmitted.

### What is IP?
Internet Protocol is a unique identifier for a computer on a TCP/IP network (like the web).

### What is DNS?
The Domain Name System is a network of servers that translate URLs into IP addresses.

### What is idempotent?
An operation that will repeatedly produce the same result. idempotent operations can be performed repeatedly on a set of data without changing it.

### What is a query string?
A set of parameters (key - value pairs) in a URL that changes the way a web server responds in some way.

### What is a path or route?
A path to a resource on a web server. It may be an actual path to a file or a virtual path that tells the server to create, read, update, or delete a resource.

### List four HTTP Verbs and their use cases.
GET - retrieves data from the server
PUT - commonly used for updating data on a server that already exists
POST - creates or updates data on a server
DELETE - removes data from the server

### What is a client?
A program that runs on a computer and connects to a server. A web browser is an example and makes requests to the server.

### What is a server?
A program or computer that listens for client requests and sends responses.

### What is an HTTP request?
A client GET request, using the HTTP protocol, to a server.

### What is an HTTP response?
A server response, using the HTTP protocol, to a client's request, that contains a status code and a response body with HTML text (an HTML page).

### What is an HTTP header? Give a couple examples of request and response headers you have seen.
An HTTP header provides additional information about a request or response.

Request examples include Host, user-agent, accept, authority
Response examples include Date, Content-Type, Connection, Set-Cookie, Server.

### What is REST?
REpresentational State Transfer is an architectural style that provides a framework for creating fast, scalable, and reliable APIs.

### What is JSON?
JavaScript Object Notation is a human and machine readable, structured format for saving and transferring information.

### What happens when you type in "Hello World" in google.com and press enter?
1. Domain Name System lookup for google.com
  * Browser cache check, if not found...
  * OS cache check, if not found...
  * Router cache check, if not found...
  * ISP cache check, if not found...
  * the ISP's DNS recursive search if performed

1. Browser establishes a TCP connection with the server

1. Browser makes a GET request to the server according to the HTTP protocol
  * this contains the path "http://google.com" - and possibly "Hello World" as a parameter?
  * various request headers are also sent

1. Server handles the incoming request and prepares the response as an HTML page

1. Browser receives the HTTP response, which contains...
  * status code
  * various response headers
  * the body of the response is HTML text that will be displayed by the browser

1. Browser displays the HTML content
  * body of the HTTP response is read by the browser from top to bottom
  * browser creates the DOM, which is an in-memory representation of the HTML document

1. Browser sends additional GET requests for references to additional resources that are in the HTML such as...
  * images
  * scripts
  * css or other files

### What does it mean when we say the web is "stateless"?
It means that each HTTP request is a separate transaction that doesn't require information about any other transaction.

### What is curl?
curl is a command line tool for sending or receiving data from a server. It can be used to send HTTP requests.

### Make a GET request to http://omdbapi.com?t=titanic using curl (your answer should be the curl command required).
curl http://omdbapi.com?t=titanic

The response was: {"Response":"False","Error":"No API key provided."}     ... because it requires a key now :-(
