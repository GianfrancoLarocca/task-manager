const tasks = document.querySelectorAll(".task");
const colonne = document.querySelectorAll(".colonna");

let dragItem = null;

tasks.forEach(task =>{
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
})

function dragStart(){
    console.log("start");

    setTimeout(() => this.classList.add("hidden"), 0);
    dragItem = this;
    console.log(dragItem);
}

function dragEnd(){
    console.log("end");

    this.classList.remove("hidden");
    dragItem = null;
}

colonne.forEach(col => {
    col.addEventListener("dragover", dragOver);
    col.addEventListener("dragenter", dragEnter);
    col.addEventListener("dragleave", dragLeave);
    col.addEventListener("drop", drop);
})

function dragOver(e){
    console.log("over");

    e.preventDefault();
}

function dragEnter(){
    console.log("enter");
}

function dragLeave(){
    console.log("leave");
}

function drop(){
    console.log("drop");

    this.append(dragItem);
}