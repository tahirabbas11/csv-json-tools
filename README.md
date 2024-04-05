# CSV to JSON Converter

## Description
This Node.js module provides a function to convert CSV (Comma-Separated Values) files to JSON (JavaScript Object Notation) format. The function reads the CSV file, parses its contents, and returns a JSON array representing the data.

## Installation
To use this module, install it via npm:
```bash
npm i json-from-csv
```

## Example
```bash
const { csvToJson } = require('json-from-csv');

// Path to your CSV file
const csvFilePath = 'sample_2.csv';

// If you want to use a separator other than ",", you can specify it here like this: const separator = ";" etc
const separator = ";"

// Call the csvToJson function with the path to your CSV file and optional separator
csvToJson(csvFilePath)
  .then(jsonData => {
    // Do whatever you want with the JSON data here
    console.log("Converted JSON data:",jsonData);
  })
  .catch(error => {
    // Handle any errors that occur during conversion
    console.error("An error occurred:", error);
  });

```
## Code Format
When calling the csvToJson function, provide the file path as the first parameter. If no separator is specified as the second parameter, it will default to a comma (,).

## Note
- The CSV file must have a '.csv' extension.
- Empty rows in the CSV file are skipped during conversion.
- Leading and trailing spaces in header names and data values are trimmed.

## Video Tutorial
Check out our video tutorial on YouTube: 
[here](https://www.youtube.com/watch?v=8MsKSaa1SLg)
## Authors

[@tahirabbas11](https://github.com/tahirabbas11)
## Contributing

- Contributions are welcome! To contribute:
  - Fork the repository.
  - Make changes.
  - Submit a pull request (PR).
  
Click [here](https://github.com/tahirabbas11/csv-json-tools) to reach the repository, Please ensure your PR follows these steps.
