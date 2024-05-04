const addButton = document.querySelector('.add-task button');
const listContainer = document.querySelector('.tasks');

function addTask(task){
        const list = document.createElement('li');
        list.innerHTML = task;
        const span = document.createElement('span');
        span.innerHTML = '&#120;';
        list.appendChild(span);
        listContainer.appendChild(list);
}
function getTask(){
    const data = localStorage.getItem('data');
    document.querySelector('.tasks').innerHTML = data;
}
function saveTask(){
        localStorage.setItem('data', document.querySelector('.tasks').innerHTML);
    }
addButton.addEventListener('click',()=>{
    const task = document.querySelector('.add-task input');
    if(task.value == ""){
        alert("Please enter the task.");
    }
    else{
        addTask(task.value);
        saveTask();
        task.value = '';
    }
})
listContainer.addEventListener('click', (event)=>{
    if(event.target.tagName == "LI"){
        event.target.classList.toggle('checked');
    }
    if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove();
    }
    saveTask();
})
getTask();