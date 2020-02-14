export const newItem = (currentList, itemNumber, itemName) => {
    currentList.insertAdjacentHTML('beforeend',
    `<li class="list-group-item" ID="item${itemNumber}">
        ${itemName}
        <button type="submit" class="btn btn-danger btn-xs pull-right glyphicon glyphicon-minus" ID="del-item-button${itemNumber}"></button>
        <button type="submit" class="btn btn-success btn-xs pull-right glyphicon glyphicon-ok" ID="finish-item-button${itemNumber}"></button>

    </li>`)
}