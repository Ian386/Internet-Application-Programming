document.addEventListener("DOMContentLoaded", ()=>{
    //query submit button and inout task field
    var submit= document.querySelector("#submit");
    var newTask= document.querySelector('input[type="text"]');
    //disable the submit button by default
    submit.disabled=true;
    newTask.addEventListener('input', function(){
        //enable/disable the submit button based on whether the input field is empty
        submit.disabled= newTask.value.length==0;
});
//listen for submission of the form
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    //find the task the user entered
    var taskText= newTask.value.trim();
    //create a new list item for the task submitted
    var newTaskItem= document.createElement('li');
    newTaskItem.textContent= taskText;
    // add the eelment to the the unordered list
    document.querySelector('ul').appendChild(newTaskItem);
    // clear the input field and disable the submit button
     newTask.value='';
    //prevent the form from submitting
    return false;

});
});