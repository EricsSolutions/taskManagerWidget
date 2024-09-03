import { taskManWidget } from './taskManClass.js';

var projectsWrapperID = 'projectsWrapper';
var jsonUrl = './js/allProjects.json';
var projectName;
var parentElID;

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
