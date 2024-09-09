function editThisListOfTasks(){

}



// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const openModalButton = document.getElementById("openModalButton");

// Get the <span> element that closes the modal
const closeModalBtns = document.getElementsByClassName("closeModalBtn");

for (var i=0; i<closeModalBtns.length; i++){
    var thisBut = closeModalBtns[i];
    thisBut.addEventListener('click', ()=>{
        modal.style.display = "none";
    });
}

// When the user clicks the button, open the modal 
openModalButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
    // closeModalBtn.onclick = function() {
    //     modal.style.display = "none";
    // }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
