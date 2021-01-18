
$("#add-btn").on("click", (event) => {
    event.preventDefault();
    async function clientSideBurger() {
        const addBurger = {
            name: $("#add").val(),
        };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addBurger)
        };
        const response = await fetch("/new", options);
        const newBurgerJson = await response.json();
        console.log(newBurgerJson);
        location.reload();
    };
    clientSideBurger();
});

//PUT request when "devour it" button is clicked
$(".devour-btn").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(`This is the devoured burger's id: ${id}`);
    $.ajax("/new/" + id, {
        type: "PUT",
        success: function (result) {
            console.log(result);
            console.log(id);
        }
    }).then(
        function () {
            console.log(`please,just a little bit more ${id}`);
            location.reload();
        }
    );
});


//DELETE request when "throw it up" button is clicked
$(".delete-btn").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    //var id = $(this).attr("data-id");
    console.log(`This is the deleted row's id : ${id}`);
    $.ajax("/new/" + id, {
        type: "DELETE",
        success: function (result) {
            console.log(result);
            console.log(id);
        }
    }).then(
        function () {
            console.log(`please,just a little bit more ${id}`);
            location.reload();
        }
    );
});

