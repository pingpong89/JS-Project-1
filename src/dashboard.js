let jumbotron = document.querySelector(".jumbotron");
let mainButtons = document.querySelectorAll(".main_buttons");
let firstName = localStorage.getItem('first');
let header = document.getElementById('header');


// Remove jumbotron, sign-up & log-in buttons
export const resetPage = () => {
    jumbotron.remove();
    mainButtons.forEach((button) =>{
        button.remove();
    })
}

// Add new header
export const createHeader = () => {
    let newHeader = 
    `<div class = "page-header">
        <h1>Welcome to Workify, ${firstName}</h1>
    </div>`;
    header.insertAdjacentHTML('afterbegin',newHeader);
}


// Create initial list item with "create" button
export const createToDoButton = () => {
    let toDoListButton = 
    `<div class="container" ID="todo_lists">
        <div class="panel-group" id="accordion">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                            <form>
                                <div class="input-group">
                                    <input type="text" class="form-control" ID="list-name" placeholder="Create to do list" onfocus="this.value=''">
                                        <div class="input-group-btn">
                                            <button class="btn btn-success" ID="list_button" type="submit">
                                                <i class="glyphicon glyphicon-plus"></i>
                                            </button>
                                    </div>
                                </div>
                            </form>
                        </a>
                    </h4>
                </div>
                <div id="collapse1" class="panel-collapse collapse in">
                    <ul class="list-group">
                    </ul>
                </div>
            </div>
        </div>
    </div>`
    header.insertAdjacentHTML('afterend', toDoListButton);
}
