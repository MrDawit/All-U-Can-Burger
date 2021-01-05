
// //so far app chooses add.js form function over post request on burgers_controllers
$("#add-btn").on("click",  (event) =>{
    event.preventDefault();

    async function burFun (){
    const bur =  {
        name: $("#add").val(),
    };
    
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bur)
    };

    //  fetch("/new", options).then(response => {
    //     console.log(response);
    // });

    const response = await fetch("/new", options);
    const json = await response.json();
    console.log(json);
    };

    //calling async function
    burFun();




    // $.post("/")
    //     .then(function (data) {
    //         console.log(data);
    //         $("#add").val("");
    //         $.get("/", (data) => {
    //             $("#burgerList").append(`<p>${data.name}</p>`);
    //         console.log("success");
    //     });

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




