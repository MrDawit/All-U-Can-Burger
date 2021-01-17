
// //so far app chooses add.js form function over post request on burgers_controllers
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

        //  fetch("/new", options).then(response => {
        //     console.log(response);
        // });

        const response = await fetch("/new", options);
        const newBurgerJson = await response.json();
        console.log(newBurgerJson);
        location.reload();
    };

    //calling async function
    clientSideBurger();




    // $.post("/")
    //     .then(function (data) {
    //         console.log(data);
    //         $("#add").val("");
    //         $.get("/", (data) => {
    //             $("#burgerList").append(`<p>${data.name}</p>`);
    //             console.log("success");
    //         });
 

            // $.ajax({
            //     type: "POST",
            //     url: "/new",
            //     data: burg,
            //     success: success,
            //     dataType: dataType
            //   });

            // $("#burgerList").append(`<p>${$("#add").val()}</p>`);
            console.log("We got a Add...js?");



        });
    // console.log("We got a Burger...js?");

    // $("#burgerList").append(`<p>${burg.name}</p>`);

    //   console.log($("#add").val(""));

    console.log("We got a Add...js2?");




