
let appName = "NovaApp";


let userCount = 10000;


let isAvailable = true;


let features = ["Fast Performance", "Security", "Analytics"];


let platform = {
    name: "NovaApp",
    version: "1.0",
    category: "Productivity"
};



document.getElementById("appName").innerHTML =
    "App Name: " + appName;

document.getElementById("userCount").innerHTML =
    "Total Users: " + userCount;

document.getElementById("availability").innerHTML =
    "Platform Available: " + isAvailable;

document.getElementById("features").innerHTML =
    "Features: " + features.join(", ");

document.getElementById("platform").innerHTML =
    "Platform: " + platform.name +
    " | Version: " + platform.version +
    " | Category: " + platform.category;


// ==========================================
// STEP 3: Arrow Function
// ==========================================

const showProjectSummary = () => {

    return "NovaApp is a productivity platform with " +
           userCount +
           " users and features including " +
           features.join(", ") +
           ".";

};

// ==========================================
// STEP 4: Click Event
// ==========================================

document.getElementById("summaryButton").addEventListener("click", () => {

    document.getElementById("summaryOutput").innerHTML =
        showProjectSummary();

});
