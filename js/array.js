const people = [
    {
        name: "Grace Waters",
        image: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F30%2FVulpes_vulpes_ssp_fulvus.jpg%2F320px-Vulpes_vulpes_ssp_fulvus.jpg&sp=1732182503T2e9fe0d5f76fb9249ba2806b534651ae6ae84056fa9c3e6f4bbdbd4d63a92802",
        occupation: "Software Engineer"
    },
    {
        name: "Grace Waters",
        image: "",
        occupation: "Software Engineer"
    },
    {
        name: "Grace Waters",
        image: "https://unsplash.com/photos/a-dirt-road-in-the-middle-of-a-desert-8x4_rmUbTC4",
        occupation: "Software Engineer"
    },
    {
        name: "Grace Waters",
        image: "https://plus.unsplash.com/premium_vector-1731804052668-33549a082872?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",
        occupation: "Software Engineer"
    }
]

let body = document.getElementById("body")
console.log("hello");

people.forEach(person => {
    let card = document.createElement("div")
    card.classList.add("card")
    body.appendChild(card)
    

    let image = document.createElement("img")
    image.src = person.image
    card.appendChild(image)

    let name = document.createElement("h2")
    name.textContent = person.name
    card.appendChild(name)

    let occupation = document.createElement("p")
    occupation.textContent = person.occupation
    card.appendChild(occupation)
})

console.log("body");


const req = new XMLHttpRequest()
const getFacts = new Promise((resolve, reject) => {
    
})

req.open("GET","https://catfact.ninja/fact")
req.send()
console.log(req.response);
req.responsetype ="json"
req.onload = ()=> console.log(req.response.fact);


const req = new XMLHttpRequest()

req.open("POST", "https://api.restful-api.dev/objects")
data = {
    "name": "",
}