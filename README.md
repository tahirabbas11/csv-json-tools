# CSV to JSON Converter

## Description
This Node.js module provides a function to convert CSV (Comma-Separated Values) files to JSON (JavaScript Object Notation) format. The function reads the CSV file, parses its contents, and returns a JSON array representing the data.

## Installation
To use this module, install it via npm:
```bash
npm install csv-json-tools
```

## Example
```bash
const { csvToJson } = require('csv-json-tools');

const csvFilePath = 'grades.csv';

csvToJson(csvFilePath)
  .then(jsonData => {
    console.log("Converted JSON data:", jsonData);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
```
## Note
- The CSV file must have a '.csv' extension.
- Empty rows in the CSV file are skipped during conversion.
- Leading and trailing spaces in header names and data values are trimmed.
