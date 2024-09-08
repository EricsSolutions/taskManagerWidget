import { taskManWidget } from './taskManClass.js';

var projectsWrapperID = 'projectsWrapper';
var jsonUrl = './js/allProjects.json';
var projectName;
var parentElID;



function getProjectName(){
    var projectName;
    return projectName;
}
function getProjectThumbUrl(){
    var projectThumbUrl;
    return projectThumbUrl;
}
function getProjectTitle(){
    var projectTitle;
    return projectTitle;
}
function getColumns(){
    var columns;
    return columns;
}
function getThisColsHeading(){
    var thisColsHeading;
    return thisColsHeading;
}
function getThisColsID(){
    var thisColsID;
    return thisColsID;
}
function getThisColsTasks(){
    var thisColsTasks;
    return thisColsTasks;
}



function makeJsonFromHTML(){
    var allProjects = document.getElementsByClassName('oneProject');
    var json = {};

    Object.keys(allProjects)
        .filter((k, i) => i >= 0 && i < 300)
        .forEach((k)=>{
            var thisData = extractProjectData(allProjects[k])
            console.log(thisData);
        });

    var keys = Object.keys(allProjects);
    console.log(keys);


    // Function to extract project data
    function extractProjectData(projectElement) {
        var projectName = getProjectName();
        var projectThumbUrl = getProjectThumbUrl();
        var getProjectTitle = getProjectTitle();
        var columns = getColumns();
        var thisColsHeading = getThisColsHeading();
        var thisColsID = getThisColsID();
        var thisColsTasks = getThisColsTasks();
;

        // return {
            // thumbnail,
            // title,
            // columns
        // };
    }

    // Convert to JSON
    // const json = JSON.stringify(projects, null, 2);

    // Output JSON (e.g., log to console or save to a file)
    console.log('\n\n JSON: ');
    console.log(json);
}

function makeAllProjects(){
    fetch(jsonUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('JSON\'s network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            var allProjects = data.projects;
            allProjects.forEach((thisProjectJson) => {
                var thisProjectName = thisProjectJson.name;
                var thisTaskManWidget = new taskManWidget(thisProjectJson, thisProjectName, projectsWrapperID);
            })
            makeJsonFromHTML();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
makeAllProjects();

// projectName = 'projectFullTimeEmployment';
// jsonUrl = `./js/${projectName}.json`;
// var widget4 = new taskManWidget(`./js/projectJsons/${projectName}.json`, projectName, projectsWrapperID);

// projectName = 'projectFreelancing';
// jsonUrl = `./js/${projectName}.json`;
// var widget4 = new taskManWidget(`./js/projectJsons/${projectName}.json`, projectName, projectsWrapperID);

// projectName = 'projectEricsSolutions';
// jsonUrl = `./js/${projectName}.json`;
// var widget4 = new taskManWidget(`./js/projectJsons/${projectName}.json`, projectName, projectsWrapperID);

// projectName = 'projectFreelancing';
// jsonUrl = `./js/${projectName}.json`;
// var widget4 = new taskManWidget(`./js/projectJsons/${projectName}.json`, projectName, projectsWrapperID);

// projectName = 'projectFreelancing';
// jsonUrl = `./js/${projectName}.json`;
// var widget4 = new taskManWidget(`./js/projectJsons/${projectName}.json`, projectName, projectsWrapperID);

// projectName = 'projectFreelancing';
// jsonUrl = `./js/${projectName}.json`;
// var widget4 = new taskManWidget(`./js/projectJsons/${projectName}.json`, projectName, projectsWrapperID);

// projectName = 'projectFreelancing';
// jsonUrl = `./js/${projectName}.json`;
// var widget4 = new taskManWidget(`./js/projectJsons/${projectName}.json`, projectName, projectsWrapperID);

// projectName = 'projectFreelancing';
// jsonUrl = `./js/${projectName}.json`;
// var widget4 = new taskManWidget(`./js/projectJsons/${projectName}.json`, projectName, projectsWrapperID);
