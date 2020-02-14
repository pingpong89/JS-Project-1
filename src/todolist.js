
// Add new to do list
export const newList = (toDoStart, listNumber, listName) => {
    if(listName === ""){
        window.alert("Please name your list")
    } else{
        let newList = 
        `<div class="panel panel-default" ID="list${listNumber}"">
            <div class="panel-heading">
                <h4 class="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse${listNumber}">
                        ${listName}
                        <button type="submit" class="btn btn-danger btn-xs pull-right glyphicon glyphicon-minus" ID="del-list-button${listNumber}"></button>
                        <button type="submit" class="btn btn-success btn-xs pull-right glyphicon glyphicon-plus" ID="add-todo-button${listNumber}" data-toggle="modal" data-target="#new_item_modal"></button>
                    </a>
                </h4>
            </div>
            <div id="collapse1" class="panel-collapse collapse in">
                <ul class="list-group" ID="to-do-item${listNumber}">
                </ul>
            </div>
        </div>`;
     toDoStart.insertAdjacentHTML('afterend',newList);
    }
}
