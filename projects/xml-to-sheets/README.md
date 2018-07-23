# XML to Sheets

Converts an XML file into a csv that can then be added to google sheets by using it's gui's import button.

## To Run
create file `input.xml`. Remember that the first two nested tags are stripped.    

`bazel run //projects/xml-to-sheets:main`

Import the `CSV` through sheets ui because I said so
