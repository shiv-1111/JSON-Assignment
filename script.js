let outputContainer = document.getElementById('container');

// dwclare a JSON file named school
const school = `{"School Name": "Delhi Public School",
                "Estd. Year": 1968,
                "Rank In City": 2,
                "Total Students": 1200}`;

// parse the json file as an object
const schooldetails = JSON.parse(school);

// declare a variable to write the iterated key and value pairs
let parsedinfo = "";

// iterate through object keys and create p element for each key:value pair
for (let key in schooldetails) {
    parsedinfo += "<p>" + key + " : " + schooldetails[key] + "</p>";
}

// display the variable inside container div
outputContainer.innerHTML = parsedinfo;