import { taskManWidget } from './taskManClass.js';

var projectsWrapperID = 'projectsWrapper';
var jsonUrl = './js/allProjects.json';
var projectName;
var parentElID;



function getProjectName(projectElement){
    var projectName = projectElement.id;
    console.log(projectName);
    return projectName;
}
function getProjectThumbUrl(projectElement){
    var projectThumbUrl;
    return projectThumbUrl;
}
function getProjectTitle(projectElement){

}
function getAllColsElements(projectElement){
    var colEls = projectElement.getElementsByClassName('taskColumn');
    return colEls;
}
function getThisColsData(thisCol){
    var thisColsData = {};
    thisColsData["heading"] = getThisColsHeading(thisCol);
    thisColsData["elementID"] = getThisColsID(thisCol);
    thisColsData["tasks"] = getThisColsTasks(thisCol);
    console.log(thisColsData);
    return thisColsData;
}
function getThisColsHeading(thisCol){
    var thisColsHeading = thisCol.getElementsByClassName('colHeading')[0].innerText;
    return thisColsHeading;
}
function getThisColsID(thisCol){
    var thisColsID = thisCol.id;
    return thisColsID;
}
function getThisColsTasks(thisCol){
    var output = [];
    var allTaskDivs = thisCol.getElementsByClassName('singleTask');
    for(var i=0; i<allTaskDivs.length; i++){
        var thisTask = allTaskDivs[i];
        var thisTaskText = thisTask.innerText;
        output.push(thisTaskText);
    }
    return output;
}



function makeJsonFromHTML(){
    var allProjects = document.getElementsByClassName('oneProject');
    var outputArrOfProjects = [];

    Object.keys(allProjects)
        .filter((k, i) => i >= 0 && i < 300)
        .forEach((k)=>{
            var thisProject = allProjects[k];
            var thisProjectsJson = extractProjectData(thisProject);
            outputArrOfProjects.push(thisProjectsJson);

            // console.log(outputArrOfProjects);
            console.log(`output: ${outputArrOfProjects}`);
        });


    // Function to extract project data
    function extractProjectData(projectElement) {
        var thisProjectsJson = {};
        thisProjectsJson["name"] = getProjectName(projectElement);
        thisProjectsJson["thumbnailUrl"] = getProjectThumbUrl(projectElement);
        thisProjectsJson["projectTitle"] = getProjectTitle(projectElement);
        var allColsElements = getAllColsElements(projectElement);
        var allColsData = [];

        for (var i=0; i<allColsElements.length; i++){
            var thisCol = allColsElements[i];
            var thisColsData = getThisColsData(thisCol);
            allColsData.push(thisColsData);
        }

        thisProjectsJson["columns"] = allColsData;
        // console.log(thisProjectsJson);







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
