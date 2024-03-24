![Dashboard](https://github.com/sandeeppatil-903/CarDashBoard-JS/assets/77786274/51c63edf-d7f3-43b1-9c08-6c3623f0cf0d)
The code is wrapped in an immediately-invoked function expression (IIFE). This is a common pattern in JavaScript to create a local scope and prevent polluting the global namespace. The IIFE takes a function as an argument and immediately calls it passing another function () => window.markmap as an argument.

Inside the IIFE, the argument e is a function that, when called, returns an object containing the Markmap library. This function is immediately called with () => window.markmap, which is a function that returns the Markmap library from the global window object.

The Markmap library is accessed and assigned to the variable r using destructuring assignment.

A mind map is created using r.create(). It takes three arguments:

"svg#mindmap-lang": This is the selector for the SVG element where the mind map will be rendered. It targets an SVG element with the ID mindmap-lang.
null: This argument is for options, but it's set to null in this case.
An object representing the structure of the mind map. This structure contains nodes with headings and subheadings organized hierarchically.
The mind map structure is defined as a nested object containing nodes with properties such as t for type, d for depth, v for value (heading content), and c for children nodes.

Each main node represents a stage in a process:

Research
Planning
Designing
Manufacturing
Sales/Marketing
Each main node has subnodes for "External" and "Internal" aspects, which are further divided into "B2C" and specific methods of research/planning/designing/manufacturing/sales-marketing.

Inside the nodes, there are <h1> tags with text content like "Online," "Interview," "Public Data," and "Health," indicating different methods or aspects related to each stage.

The resulting mind map is then attached to the global window object as window.mm.


