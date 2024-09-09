import { taskManWidget } from './taskManClass.js';

var projectsWrapperID = 'projectsWrapper';
var jsonUrl = './js/allProjects.json';
var projectName;
var parentElID;







function getProjectName(projectElement){
    var projectName = projectElement.id;
    return projectName;
}
function getProjectThumbUrl(projectElement){
    var projectThumbUrl = projectElement.querySelectorAll('.oneProjectThumbnail')[0].style.backgroundImage;
    return projectThumbUrl;
}
function getProjectTitle(projectElement){
    var title = projectElement.querySelectorAll('h2')[0].innerText;
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







function extractProjectData(projectElement) {
    var thisProjectsJson = {};
    thisProjectsJson["name"] = getProjectName(projectElement);
    thisProjectsJson["thumbnailUrl"] = getProjectThumbUrl(projectElement);
    thisProjectsJson["projectTitle"] = getProjectTitle(projectElement);
    var allColsElements = getAllColsElements(projectElement);
    var allColsData = [];
    var output = [];

    for (var i=0; i<allColsElements.length; i++){
        var thisCol = allColsElements[i];
        var thisColsData = getThisColsData(thisCol);
        allColsData.push(thisColsData);
    }

    thisProjectsJson["columns"] = allColsData;

    return thisProjectsJson;
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
            // console.log(`output: ${outputArrOfProjects}`);
        });





    // Output JSON (e.g., log to console or save to a file)
    // console.log('\n\n JSON: ');
    console.log(outputArrOfProjects);
}




function makeNewWidgets(allProjects){
    allProjects.forEach((thisProjectJson) => {
        var thisProjectName = thisProjectJson.name;
        var thisTaskManWidget = new taskManWidget(thisProjectJson, projectsWrapperID);
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
            makeNewWidgets(allProjects);
            makeJsonFromHTML();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
makeAllProjects();
