function addTask(){
    let data=document.getElementById('inp').value;
    document.getElementById('two').innerHTML+=`<h1 class='Myclass'>${data}</h1>`;
    document.getElementById('inp').value="";
}

function changeColor(){

    document.getElementById('two').style.backgroundColor="#07ff13";

}
