# crudoperation
This project is a simple CRUD application that interacts with the public API https://jsonplaceholder.typicode.com. It demonstrates effective error handling for: 
Network failures 
Invalid responses 
Unexpected data formats
A custom logging system using Winston logs all errors with timestamps and details into a local file (errors.log) to help with debugging and monitoring.

The application performs all basic CRUD operations (Create, Read, Update, Delete) using axios, and includes proper try-catch blocks for safe execution.


