
var startBtn = document.createElement('input');
startBtn.setAttribute('type', 'button');
startBtn.setAttribute('value', ' + Task');
startBtn.setAttribute('id', 'btnAddTask');
startBtn.classList.add('mac-button');
startBtn.addEventListener('click', ()=>{

})
document.body.prepend(startBtn);


var modalAddItemWrapper = document.createElement('div');
modalAddItemWrapper.setAttribute('id', 'modalAddItemWrapper');
modalAddItemWrapper.classList.add('hide');
document.body.appendChild(modalAddItemWrapper);





class AddItemModal {
    constructor(column){
        this.column = column;
    }

    createModalContent(title){
        // this.modalElement = document.createElement('div');
        // this.modalElement.classList.add('modalAddItemWrapper');
    }
}





var modalAddItemWrapper = document.getElementById('modalAddItemWrapper');


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

var newTask = document.createElement('input');
newTask.setAttribute('input', 'text')
newTask.setAttribute('placeholder', 'New Task')
newTask.style.width = '333px';
newTask.style.marginRight = '0.75rem';
modalAddItemWrapper.appendChild(newTask);

var addBtn = document.createElement('button');
addBtn.innerHTML = 'Add Task';
addBtn.style.marginRight = '0.75rem';

modalAddItemWrapper.appendChild(addBtn);





function openAddModal(e, mouseX, mouseY, col){
    var thisModal = new AddItemModal(col);

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
    newTask.focus();
}
        


function closeModal(){
        modalAddItemWrapper.classList.add('hide');
        modalAddItemWrapper.classList.remove('show');
        modalBackground.classList.remove('show');
        modalBackground.classList.add('hide');
    }




btnAddTask.addEventListener('click', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    openAddModal(e, mouseX, mouseY)
})
