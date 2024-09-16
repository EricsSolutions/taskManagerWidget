

class AddItemModal {
    constructor(column){
        this.column = column;

        
        var startBtn = document.createElement('input');
        startBtn.setAttribute('type', 'button');
        startBtn.setAttribute('value', '+');
        startBtn.setAttribute('id', 'btnAddTask');
        startBtn.classList.add('mac-button');
        // startBtn.classList.add('addItemButton');
        startBtn.addEventListener('click', ()=>{

        })
        document.body.prepend(startBtn);


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


        function openModal(e, mouseX, mouseY, col){
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




        btnAddTask.addEventListener('click', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            openModal(e, mouseX, mouseY)
        })

    }



}




var newAddTask = new AddItemModal;