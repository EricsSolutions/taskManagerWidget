export class taskManWidget {
    constructor(thisProjectJson, parentElID){
        this.thisProjectJson = thisProjectJson;
        this.parentElID = parentElID;
        
        var projectName = thisProjectJson.name;
        var collectionOfTaskArrs = {
            'col1BacklogArr': [], 
            'col2ReadyArr': [], 
            'col3InProgressArr': [], 
            'col4ReviewArr': [], 
            'col5DoneArr': []
        };
        var thisProjectJson;
        var parentEl = document.getElementById(parentElID);


        this.makeJsonIntoHtml = ()=>{
            var thumbnailUrl = thisProjectJson.thumbnailUrl;
            var thisProjectDiv = document.createElement('div');
            thisProjectDiv.setAttribute('id', thisProjectJson.name);
            thisProjectDiv.classList.add('oneProject');
            var newThumbnailWrapper = document.createElement('div')
            newThumbnailWrapper.classList.add('thumbnailWrapper');
            var newThumbnail = document.createElement('div');
            newThumbnail.classList.add('oneProjectThumbnail');
            newThumbnail.style.backgroundImage = `url(${thumbnailUrl})`;
            newThumbnailWrapper.append(newThumbnail);
            var newTitleH2 = document.createElement('h2');
            newTitleH2.innerHTML = `${thisProjectJson.projectTitle}`;
            newThumbnailWrapper.append(newTitleH2);
            thisProjectDiv.append(newThumbnailWrapper);

            var cols = thisProjectJson.columns;

            cols.forEach((col)=>{
                var colID = col.elementID;
                var thisColumnDiv = document.createElement('div');
                thisColumnDiv.classList.add('taskColumn');
                thisColumnDiv.classList.add('container');
                thisColumnDiv.setAttribute('id', `${projectName}-${colID}`);
                thisProjectDiv.append(thisColumnDiv);

                // thisColumnDiv, thisHeading)
                var newHeading = document.createElement('div');
                newHeading.classList.add('colHeading');
                newHeading.innerHTML = `${col.heading}`;
                thisColumnDiv.append(newHeading);

                var thisAddTaskButton = document.createElement('div');
                thisAddTaskButton.innerHTML = `+`;
                thisAddTaskButton.classList.add('addItemButton');
                thisAddTaskButton.addEventListener('click', function(){
                    addItem(parentColumn);
                });
                thisColumnDiv.append(thisAddTaskButton);



                var thisEditTasksButton = document.createElement('div');
                thisEditTasksButton.innerHTML = `[EDIT]`;
                thisEditTasksButton.classList.add('editListButton');
                thisEditTasksButton.addEventListener('click', function(){
                    addItem(parentColumn);
                });
                thisColumnDiv.append(thisEditTasksButton);
                




                
                var tasks = col.tasks;
                tasks.forEach((task)=>{
                    var thisTaskDiv = document.createElement('div');
                    thisTaskDiv.classList.add('singleTask');
                    thisTaskDiv.classList.add('draggable');
                    thisTaskDiv.innerHTML = task.text;
                    thisTaskDiv.setAttribute('draggable', true);
                    thisColumnDiv.append(thisTaskDiv);
                });
            });
            var thisHr = document.createElement('hr');
            parentEl.append(thisHr);
            parentEl.append(thisProjectDiv);

        };


        this.addJsonToCollectionOfTaskArrs = () => {
            thisProjectJson.columns.forEach((col) => {
                var thisColID = col.elementID;
                var thisColDiv = document.getElementById(col.elementID);
                var thisColArr = collectionOfTaskArrs[`${thisColID}Arr`];
                col.tasks.forEach((task)=>{
                    thisColArr.push(task.text);
                });
            });
        }





        this.makeEverythingDraggable = () => {
            var columns = thisProjectJson.columns;
            
            columns.forEach( (column) => {
                var thisColumnID = column.elementID;
                var thisColumnDiv = document.getElementById(`${projectName}-${thisColumnID}`);
                
                var tasks = thisColumnDiv.querySelectorAll('.singleTask');
            
                tasks.forEach( (taskDiv) => {
                    });
        
        
                    thisColumnDiv.addEventListener('dragstart', (e) => {
                        e.dataTransfer.setData('text/plain', e.target.id);
                        e.target.classList.add('dragging');
                    });
        
                    thisColumnDiv.addEventListener('dragleave', (e) => {
                        e.target.classList.remove('dragging');
                    })
                    thisColumnDiv.addEventListener('dragend', (e) => {
                        e.target.classList.remove('dragging');
                    });
        
                    thisColumnDiv.addEventListener('dragover', (e) => {
                        e.preventDefault();
                        const draggingElement = document.querySelector('.dragging');
                        const afterElement = getDragAfterElement(thisColumnDiv, e.clientY);
        
                        if (typeof(draggingElement) == Object){
                            console.log('not a single element (may be dragging more than one task at a time)');
                        }
                        if (afterElement == null) {
                            thisColumnDiv.appendChild(draggingElement);
                        } else {
                            thisColumnDiv.insertBefore(draggingElement, afterElement);
                        }
                    });
        
                    function getDragAfterElement(thisColumnDiv, y) {
                        const draggableElements = [...thisColumnDiv.querySelectorAll('.draggable:not(.dragging)')];
        
                        return draggableElements.reduce((closest, child) => {
                            const box = child.getBoundingClientRect();
                            const offset = y - box.top - box.height / 2;
                            if (offset < 0 && offset > closest.offset) {
                                return { offset: offset, element: child };
                            } else {
                                return closest;
                            }
                        }, { offset: Number.NEGATIVE_INFINITY }).element;
                    }
        

                thisColumnDiv.addEventListener('dragover', function (e) {
                });

                thisColumnDiv.addEventListener('dragenter', function (e) {
                    // thisColumnDiv.style.border = '1px solid lime';         
                });

                thisColumnDiv.addEventListener('dragleave', function () {
                    // thisColumnDiv.style.backgroundColor = '';
                    // thisColumnDiv.style.border = '';         
                });

                thisColumnDiv.addEventListener('drop', function (e) {
                    // thisColumnDiv.style.backgroundColor = '';
                    // thisColumnDiv.style.border = '';
                });
            });
        }




        thisProjectJson = thisProjectJson;
        this.makeJsonIntoHtml();
        this.addJsonToCollectionOfTaskArrs();
        this.makeEverythingDraggable();

    }
    
}


