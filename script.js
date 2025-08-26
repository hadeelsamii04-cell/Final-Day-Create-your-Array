// Create a empty array to store the names here 

let names = [];


// create a function that can add names to the array and print it in the list here 

function addName(){

    let inputVal = document.getElementById("name").value;
    names.push(inputVal);
    [inputVal].forEach(element => {
        document.getElementById("namesList").innerHTML += "<li>" + element + "</li>"
    });

    console.log(names);

}

function deleteName(){
    names.pop();
    let remove = document.getElementById("namesList");
    remove.removeChild(remove.lastChild)

    console.log("names");
}




// create a function that can remove the last name from the array and print it in the list here 






