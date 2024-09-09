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

}
function getColumns(projectElement){
    // var columns = projectElement.querySlectorAll('.taskColumn')
    var columns = projectElement.getElementsByClassName('taskColumn');
    return columns;
}
function getThisColsData(thisCol){
    var thisColsData = {};
    var thisColsHeading = getThisColsHeading(thisCol);
    var thisColsID = getThisColsID(thisCol);
    var thisColsTasks = getThisColsTasks(thisCol);
    thisColsData.heading = thisColsHeading;
    console.log(thisColsData);
    return thisColsData;
}
function getThisColsHeading(thisCol){
    var thisColsHeading;
    return thisColsHeading;
}
function getThisColsID(){
    var thisColsID;
    return thisColsID;
}
function getThisColsTasks(){
    var thisColsTasks = []
    var allTaskDivs = col.querySlectorAll('.singleTask');
    allTaskDivs.forEach((thisTask) => {
        thisColsTasks.append(thisTask.innerHtml);
    })
    return thisColsTasks;
}



function makeJsonFromHTML(){
    var allProjects = document.getElementsByClassName('oneProject');
    var outputJsonProjects = [];

    for (var i=0; i<allProjects.length; i++){
        var thisProjectsJson = extractProjectData(allProjects[i]);
        // console.log(thisProjectsJson);
    }
    Object.keys(allProjects)
        .filter((k, i) => i >= 0 && i < 300)
        .forEach((k)=>{
            var thisProjectsJson = extractProjectData(allProjects[k]);
            // console.log(thisData);
        });
    var thisProjectData = extractProjectData(outputJsonProjects);
    outputJsonProjects.push(thisProjectData);

    var keys = Object.keys(allProjects);
    // console.log(keys);


    // Function to extract project data
    function extractProjectData(projectElement) {
        var thisProjectsJson;
        var projectName = getProjectName(projectElement);
        var projectThumbUrl = getProjectThumbUrl(projectElement);
        var projectTitle = getProjectTitle(projectElement);
        var columns = getColumns(projectElement);
        var thisColsHeading = getThisColsHeading(projectElement);
        var thisColsID = getThisColsID(projectElement);
        var thisColsTasks = [];


        for (var i=0; i<columns.length; i++){
            
        }

        columns.forEach((col)=>{
            thisColsTasks = getThisColsTasks(col);
        })




        // columns = getColumns(projectElement);

        // columns.ForEach((col) => {
        //     thisColsHeading = getThisColsHeading(col);
        //     thisColsID = getThisColsID(col);
        //     thisColsTasks = getThisColsTasks(col);
            
        // });
        thisColsHeading = getThisColsHeading(projectElement);
        thisColsID = getThisColsID(projectElement);
        thisColsTasks = getThisColsTasks(projectElement);

        // THIS NEEDS TO BE NESTED OR RECURSIVELY CALLED OR SOMETHING ELSE

        thisProjectsJson = {
            "name": projectName,
            "thumbnailUrl": projectThumbUrl, 
            "projectTitle": projectTitle,
            "columns": [
                {
                    "elementID": "col2Ready",  
                    "heading": "Ready",
                    "tasks": [
                        {"text": "Toptal"}, 
                        {"text": "Fiverr"}, 
                        {"text": "Upwork"}, 
                        {"text": "99 Designs"}
                    ]
                },
                {
                    "elementID": "col2Ready",  
                    "heading": "Ready",
                    "tasks": [
                        {"text": "Toptal"}, 
                        {"text": "Fiverr"}, 
                        {"text": "Upwork"}, 
                        {"text": "99 Designs"}
                    ]
                }
            ]
        };
    }

    // Convert to JSON
    // const json = JSON.stringify(projects, null, 2);

    // Output JSON (e.g., log to console or save to a file)
    // console.log('\n\n JSON: ');
    // console.log(json);
}




function makeNewWidgets(allProjects){
    allProjects.forEach((thisProjectJson) => {
        var thisProjectName = thisProjectJson.name;
        var thisTaskManWidget = new taskManWidget(thisProjectJson, thisProjectName, projectsWrapperID);
    });
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






var thisPro = {
                "name": "pun chicken", 
                "thumbnailUrl": "./images/freelancingCode.jpg",
                "projectTitle": "Freelancing",
                "columns": [
                    {
                        "elementID": "col1Backlog",  
                        "heading": "Backlog",
                        "tasks": [
                        ]
                    }, 
                    {
                        "elementID": "col2Ready",  
                        "heading": "Ready",
                        "tasks": [
                            {"text": "Toptal"}, 
                            {"text": "Fiverr"}, 
                            {"text": "Upwork"}, 
                            {"text": "99 Designs"}
                        ]
                    }, 
                    {
                        "elementID": "col3InProgress",  
                        "heading": "In Progress",
                        "tasks": [
                        ]
                    }, 
                    {
                        "elementID": "col4Review",  
                        "heading": "Review",
                        "tasks": [
                        ]
                    }, 
                    {
                        "elementID": "col5Done",  
                        "heading": "Done",
                        "tasks": [
                        ]
                    }
                ]
            };





            // data.projects.push(thisPro);
            // console.log(data);
            makeNewWidgets(allProjects);
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
