

class AddItemModal {
    constructor(projectName, colName, parentEl, thisBtn, event){
        this.colName = colName;
        this.projectName = projectName;
        this.parentEl = parentEl;
        this.thisBtn = thisBtn;
        this.event = event;
        console.log(`${projectName}: ${colName}, parentEl: ${parentEl}`);

        

        // var startBtn = document.createElement('input');
        // startBtn.setAttribute('type', 'button');
        // startBtn.setAttribute('value', '+');
        // startBtn.setAttribute('id', 'btnAddTask');
        // startBtn.classList.add('mac-button');
        // // startBtn.classList.add('addItemButton');
        // startBtn.addEventListener('click', ()=>{

        // })
        // document.body.prepend(startBtn);


        

        const modalAddItemWrapper = document.createElement('div');
        modalAddItemWrapper.setAttribute('id', 'modalAddItemWrapper');
        modalAddItemWrapper.classList.add('hide');
        document.body.appendChild(modalAddItemWrapper);

        const modalBackground = document.createElement('div');
        modalBackground.classList.add('modal');
        modalBackground.setAttribute('id', 'myModal');
        document.body.appendChild(modalBackground);

        const closeModalBtn = document.createElement('span');
        closeModalBtn.id = 'closeModalBtn';
        closeModalBtn.className = 'close';
        closeModalBtn.textContent = '×';
        closeModalBtn.addEventListener('click', ()=>{
            closeModal();
        });
        modalAddItemWrapper.appendChild(closeModalBtn);

        var inputNewTask = document.createElement('input');
        inputNewTask.setAttribute('input', 'text')
        inputNewTask.setAttribute('placeholder', 'New Task')
        inputNewTask.style.width = '333px';
        inputNewTask.style.marginRight = '0.75rem';
        modalAddItemWrapper.appendChild(inputNewTask);

        var submitBtn = document.createElement('button');
        submitBtn.innerHTML = 'Add Task';
        submitBtn.style.marginRight = '0.75rem';
        modalAddItemWrapper.appendChild(submitBtn);
        submitBtn.addEventListener('click', ()=>{
            
        });


        function openModal(event, mouseX, mouseY, col){
            // var thisModal = new AddItemModal(col);

            modalBackground.addEventListener('click', ()=>{
                closeModal();
            })

            function showModal(){
                modalAddItemWrapper.classList.add('show');
                modalAddItemWrapper.classList.remove('hide');
                modalAddItemWrapper.style.left = `${mouseX-13}px`;
                modalAddItemWrapper.style.top = `${mouseY-35}px`;
                modalBackground.classList.remove('hide');
                modalBackground.classList.add('show');
            }

            showModal();
            inputNewTask.focus();
        }


        function closeModal(){
                modalAddItemWrapper.classList.add('hide');
                modalAddItemWrapper.classList.remove('show');
                modalBackground.classList.remove('show');
                modalBackground.classList.add('hide');
            }



        const mouseX = event.clientX;
        const mouseY = event.clientY;

        openModal(event, mouseX, mouseY)

    }



}



var parentEl = document.getElementById('freelancing-col1Backlog');
var newAddTask = new AddItemModal('projectName', 'colName', parentEl);
// var newAddTask = new AddItemModal('plasma', 'done', 'parentEl');
// var newAddTask = new AddItemModal('roboticHand', 'backlog', 'parentEl');
// var newAddTask = new AddItemModal('crystal', 'To Do', 'parentEl');