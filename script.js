const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", addTask);

function addTask(){

    const text = input.value.trim();

    if(text === ""){
        alert("Sisesta ülesanne");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = text;

    const doneButton = document.createElement("button");
    doneButton.textContent = "✔";

    doneButton.addEventListener("click", function(){

        taskText.classList.toggle("completed");

    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    deleteButton.addEventListener("click", function(){

        li.remove();

    });

    li.appendChild(taskText);
    li.appendChild(doneButton);
    li.appendChild(deleteButton);

    list.appendChild(li);

    input.value = "";
}

function calculate(){

    const n1 =
    Number(document.getElementById("num1").value);

    const n2 =
    Number(document.getElementById("num2").value);

    document.getElementById("result").textContent =
    "Tulemus: " + (n1 + n2);

}

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", ()=>{

document.body.classList.toggle("dark");

});