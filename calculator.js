// jai sita raam 

let string = "";
let  button = document.querySelectorAll("button");
Array.from(button).forEach((button) =>{
    button.addEventListener("click",(e) => {
        if (e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value = string;
            // string = st;

        }
        else if (e.target.innerHTML == "AC"){
            string = "";
            document.querySelector("input").value = string;
        
        }
        // else if (e.target.innerHTML == "AC" && )
        else{
            console.log(e);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
})

console.log(eval(10));