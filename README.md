# Shopping Amount Calculator

## Description
This app reads the files **emails.json** and **items.json** put into the resources folder that's located in
the project root, then return a map with the amount of the item's prices divided between the emails (the
customers).  

## Usage
As mentioned before, you should put the files into the **resources** folder, the files content should be as
descripted bellow:

### emails.json
the file name must be in lower case and should have the following pattern:
```
[
  "mail1@mail.com", "mail2@mail.com", "n@mail.com",
]
```
*Note: every array element must be a string*

### items.json
the file name must be in lower case and should have the following pattern:
```
[
  {
    "name": "Test Product 1",
    "quantity": 1,
    "price": 500
  },
  {
    "name": "Test Product 2",
    "quantity": 4,
    "price": 100
  },
  {
    "name": "Test Product N",
    "quantity": 2,
    "price": 200
  }
]
```
*Note: every array element must have a name as string, quantity as integer number, and price as integer
number*

## Running the App

To run the app you should be using node version `14.15.4`

first run: `npm install`

Then: `npm run build`

And finally: `npm start`

If you have put the files into the resources folder in the right format you should see something like
```
{ "mail@mail.com": 433, "mail2@mail.com": 433, "n@mail.com": 434 }
```
*Note: The result is a map with the email as a string key and the value is the amount by customer*  
*Note 2: The cents are divided to be most equaly possible and not be a repeating decimal*  
*Note 3: The values are treated as integer, wich means that 100 is 1,00 in the currency*  

## Development

For development guides you should visit [here](docs/development.md)

## ToDo List

- Implement unit tests to presentation layer
- Add integration tests to main layer
- Refactor presentation helpers (maybe some helpers could be usecases)