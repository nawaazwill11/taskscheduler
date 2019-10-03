// Global variables
var task = [];
//

$('#t').on('change', '.checkbox', function (e) {
    e.stopPropagation();
    // Parent of add button
    parent = $(this).parent().parent();
    if (this.checked == true) {
        makeTableRow(parent, 'task-row');
        toggleBas(parent, '.add-self');
    }
    else if (this.checked == false) {
        toggleBas(parent, '.add-self');
        removeChild(parent, 'task-row');
    }
});

// Root add button
// $('#add').click(function(e) {
//     e.stopPropagation();
//     let task_table = $('#t');
//     makeTableRow(task_table, 'task-row');
//     set_data_attr()
// });

// Add button event handle.
$('#container').on('click', '.bas', function (e) {
    e.stopPropagation();
    let element = $(this).parent().parent();
    if (element.attr('id') == 'container') {
        element = $(this).parent().parent().find('#t');
    }
    addToObject(element);
    makeTableRow(element,'task-row');   

});

function addToObject(element) {
    if (element.attr('id') == 'container') {
        return ;
    }
    var valObj = {};
    element.forEach(child => {
        if (child.type == 'text') {
            valObj[child.name] = child.value;
        }
    });
    console.log(valObj);
    return valObj

}

// Removes child element(s) with respect to class name.
function removeChild(element, className) {
    let children = element.children(); 
    for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains(className)) {
            // console.log();
            children[i].remove();
        }
    }
}

// Shows/Hides nested add button
function toggleBas(element, className) {
    add_self = element.find(className)[0];
    let bas = add_self.children[0];
    if (bas.classList.contains('bas-hide')) {
        bas.classList.remove('bas-hide')
    }
    else {
        bas.classList.add('bas-hide');
    }
}

// Add task-row to parent element.
function makeTableRow(element, className) {
    children = Array.from(element.children())
    // console.log(element);
    let index = getRowCount(children, className);
    let id = element.attr('id') + index;
    let row = generateRow(id);
    element.append(row);
}

// Returns HTML fragment for task-row
function generateRow(id) {
    return document.createRange().createContextualFragment(`
    <div id="${id}" class="task-row">
    <input type="text" class="task-cell" name="name">
    <input type="text" class="task-cell" name="time">
    <div class="subbox">
        <input type="checkbox" class="task-cell checkbox">
        <span style="font-size: x-small">Has Sub-task?</span>
    </div>
    <div class="add-self">
        <button class="bas bas-hide">Add</button>
    </div>
    `);
}

// Returns the next index for task-row id.
function getRowCount(element, className) {
    let index = 1;
    // Counts the number of subtask rows.
    for (let i = 0; i < children.length; i++) {
        if (Array.from(children[i].classList).indexOf(className) == 0) {
            sub_tasked = true; 
            index++;
        }
    }
    return index;
}

