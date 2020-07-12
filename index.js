const handleAddButton = function() {
    $('#js-shopping-list-form').on("submit", function(event) {
        event.preventDefault();
        let input = $("input[type=text]");
        console.log(input.val());
        input.val("");
    });
}

const handleCheckButton = function() {
    $('.shopping-list').on("click", ".shopping-item-toggle", function(event) {
        let listItem = this.closest('.shopping-item-controls');
        $(listItem).siblings().toggleClass('shopping-item__checked');
    });
}

const handleDeleteButton = function() {
    $('.shopping-list').on("click", ".shopping-item-delete", function(event) {
        let listItem = this.closest('li');
        $(listItem).remove();
        
    });
}

$(handleAddButton);
$(handleDeleteButton);
$(handleCheckButton);