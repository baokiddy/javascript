// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// Level 1: Create table on index page
// Method 1
// data.forEach(function(tableData) {
//     console.log(tableData);
//     var row = tbody.append("tr");
      
//     Object.entries(tableData).forEach(function([key, value]) {
//         console.log(key, value);
//         // Append a cell to the row for each value
//         // in the weather report object
//         var cell = tbody.append("td");
//         cell.text(value);
//       });
// });

// Method 2:
function buildTable(info) {
    console.log(info)
    data.forEach((info) => {
        var row = tbody.append("tr");
        Object.entries(info).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
        });
};

buildTable(tableData);

// Level 2: Filtering the table
// Select the submit button
var submit = d3.select("#filter-btn");

function handleFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(item => item.datetime === inputValue);

    d3.select("#tbodyid").remove()

    function updateTable(data){
        console.log(data)
        data.forEach((data) => {
            var row = tbody.append("tr");
            Object.entries(data).forEach(([key, value]) => {
                var cell = tbody.append("td");
                cell.text(value);
            });
            });
    };

    updateTable(filteredData);
    
};


submit.on("click", handleFilter);
