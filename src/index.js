import * as signUp from './signup'; 
import * as logIn from './login';
import * as dashboard from './dashboard';
import * as list from './todolist'
import * as listItem from './listItem';

// Sign up and login DOM elements
let signUpSubmit = document.getElementById("signUpSubmit");
let logInSubmit = document.getElementById("logInSubmit");


// Dashboard functions to be placed in event listener after development
// initializeToDoPage();
// addEventListers();

// Listen for sign up submit
signUpSubmit.addEventListener("click",(e) => {
    signUp.storeInput();
    signUp.clearIncompletes();
    let absentData = signUp.validateSignUp();
    if(!absentData){
        $('#sign_up').modal('hide')
        initializeToDoPage();
        addEventListers();
    }
});

// Listen for log in submit
logInSubmit.addEventListener("click", (e) => {
    logIn.clearErrors();
    if(logIn.validateLogIn()){
        let correctCredentials = logIn.checkCredentials();
        if(correctCredentials){
            $('#log_in').modal('hide')
            initializeToDoPage();
            addEventListers();
        }
        
    }
});

// Don't add event listeners until DOM elements have been created
function addEventListers(){

// Listen for list creation
let listItemFlag = false;
let createNewList = document.getElementById("list_button");
let toDoStart = document.getElementById("accordion");
let listName = document.getElementById("list-name");
let listNumber = 1;
let itemNumber = 1;
createNewList.addEventListener("click", (create) => {
    list.newList(toDoStart,listNumber,listName.value);
    
    // Listen for list deletion
    let deleteList = document.getElementById(`del-list-button${listNumber}`);
    let currentList = document.getElementById(`list${listNumber}`);
    deleteList.addEventListener("click", (del) => {
        currentList.remove();
    })

  
        let addToDo = document.getElementById(`newItemSubmit`);
        // Listen for list item creation
        addToDo.addEventListener("click",(add) => {
            console.log(`list${listNumber}`);
            let createdItem = document.getElementById(`newItemName`);
            console.log(currentList);
            listItem.newItem(currentList, itemNumber, createdItem.value); // BOOKMARK currentList has all lists
            $('#new_item_modal').modal('hide');

            // Listen for list item deletion
            let deleteItem = document.getElementById(`del-item-button${itemNumber}`);
            let currentItem = document.getElementById(`item${itemNumber}`);
            deleteItem.addEventListener("click", (rem) => {
                currentItem.remove();
            })

            // Listen for list item completion
            let finishItem = document.getElementById(`finish-item-button${itemNumber}`);
            finishItem.addEventListener("click", (finish) => {
                finish.preventDefault();
                currentItem.classList.add("list-group-item-success");
                console.log("TESTs");
                
            })
            addToDo.removeEventListener();

            // Don't recreate event listener
            listItemFlag = true;
            
            // Incremet item number
            itemNumber++;
        })



    // Increment list number
    listNumber++;

})

}


// Dashboard init functions
function initializeToDoPage(){
    dashboard.resetPage();
    dashboard.createHeader();
    dashboard.createToDoButton();
}






