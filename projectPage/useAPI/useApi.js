const btn = document.querySelector("#button")
const btnJson = document.querySelector('#fetchAPI')
const form = document.querySelector('#addPost')
console.log(btn);


btn.addEventListener('click', fetchData)
btnJson.addEventListener('click', fetchDataFromJSON)
form.addEventListener('submit', addPosts)
function fetchData() {
    console.log('Button clicked.')
    //We need first to create a XMLHttpRequest Object 
    let xhr = new XMLHttpRequest();
    //console.log(xhr);
    //Then, we need to open this newly created object wiht 
    //three parameters: its request type, url/file name, and if it is async
    xhr.open('GET', 'http://www.sfu.ca/security/sfuroadconditions/api/3/current',true)
    console.log(xhr);
    //when this xhr has been loaded.
    xhr.onload = function() {
        let content = document.querySelector('#container')
        console.log(this.status)   
        if(this.status == 200) {
            //console.log(this.response)
            let data = JSON.parse(this.response);
            console.log(data)
            let roadInfo = "SFU Burnaby Campus Road's Status is "+data.campuses.burnaby.roads.status +
            ". Severity is " + data.campuses.burnaby.roads.severity +'. Real time Announcements: ' +
            `<code>${data.campuses.burnaby.announcements}</code>`
            console.log(roadInfo)
            let roadElement = document.createElement('p');
            roadElement.textContent = roadInfo;
            content.innerHTML = roadInfo          
        }else{
            console.log("error.")
        }
    }
    xhr.send();
}


//this function uses fetch API to handle http requests. It is more advantage than XMLHttprequest
//but not perfectly capatible.
function fetchDataFromJSON() {
    console.log("worked")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output = `<h2>Fake Posts</h2>`;
        data.forEach(function(post){
            output += `<div>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p> 
                        </div>
                      `;
        })
        document.getElementById('output').innerHTML = output
    })
}



function addPosts(e) {
    e.preventDefault();
    console.log("good here")
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    console.log(title)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers:{
            'Accept':'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            title:title,
            body:body
        })
    }).then((res) => res.json()).then((data) => console.log(data));


}