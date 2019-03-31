// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Level 1: Create table on index page
// Function to create table with data
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

// Add data to table using function
buildTable(tableData);

// Level 2: Filtering the table
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputElementC = d3.select("#city");
    var inputElementS = d3.select("#state");
    var inputElementCo = d3.select("#country");
    var inputElementSh = d3.select("#shape");


    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputValueC = inputElementC.property("value");
    var inputValueS = inputElementS.property("value");
    var inputValueCo = inputElementCo.property("value");
    var inputValueSh = inputElementSh.property("value");

    console.log(inputValue);

    var filteredData = tableData;

    // Filter the data depending on inputs
    if (inputValue.length > 0) {
        var filteredData = filteredData.filter(item => item.datetime === inputValue);
    };

    if (inputValueC.length > 0) {
        var filteredData = filteredData.filter(item => item.city === inputValueC);
    };

    if (inputValueS.length > 0) {
        var filteredData = filteredData.filter(item => item.state === inputValueS);
    };
    
    if (inputValueCo.length > 0) {
        var filteredData = filteredData.filter(item => item.country === inputValueCo)
    };
    
    if (inputValueSh.length > 0) {
        var filteredData = filteredData.filter(item => item.shape === inputValueSh);
    };

    console.log(filteredData);

    // Remove old table body
    d3.select("tbody").remove();

    // Create new empty table body
    d3.select("#ufo-table").append("tbody")

    var tbody = d3.select("tbody");

    // // Function to update table body with filtered data
    function updateTable(data) {
        console.log(data)
        data.forEach((data) => {
            var row = tbody.append("tr");
            Object.entries(data).forEach(([key, value]) => {
                var cell = tbody.append("td");
                cell.text(value);
            });
            });
    };

    // If filter has values, print updated table
    // If filter has no values, print original table
    if (filteredData.length > 0) {
        updateTable(filteredData);
    } else {
        updateTable(tableData);
    };
     
});
