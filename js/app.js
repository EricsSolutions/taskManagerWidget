import { taskManWidget } from './taskManClass.js';

var projectsWrapperID = 'projectsWrapper';
var jsonUrl = './js/allProjects.json';
var projectName;
var parentElID;

function makeJsonFromHTML(){
    var allProjects = document.getElementsByClassName('oneProject');
    var json = {};

    Object.keys(allProjects)
    .filter((k, i) => i >= 0 && i < 300)
    // .forEach(k => console.log(allp))
    .forEach((k)=>{
        var thisData = extractProjectData(allProjects[k])
        console.log(thisData);
    });

    var keys = Object.keys(allProjects);
    console.log(keys);


    // Function to extract project data
    function extractProjectData(projectElement) {
        // const thumbnail = projectElement.querySelector('.oneProjectThumbnail').style.backgroundImage.replace(/url\("|\)"/g, '');
        const thumbnail = 'thumbnail URL';
        const title = projectElement.querySelector('h2').textContent;
        
        const columns = Array.from(projectElement.querySelectorAll('.taskColumn')).map(column => {
            // console.log(column);
            const heading = column.querySelector('.colHeading').textContent;
            const tasks = Array.from(column.querySelectorAll('.singleTask')).map(task => task.textContent.trim());
            return {
            heading,
            tasks
            };
        });

        return {
            thumbnail,
            title,
            columns
        };
    }
    // Extract all projects
    var projects = Array.from(doc.querySelectorAll('.oneProject')).map(extractProjectData);
    // console.log(projects);

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
        })
        .then(()=>{
            makeJsonFromHTML()
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
