

function getMonster(pageNum){

fetch(`http://localhost:3000/monsters/?_limit=50&_page=${pageNum}`)
.then(res=>res.json())
.then(data=>monsters(data))
// console.log(pageNum)
}

let num = 0;
let counter;
function navigate(){
    if (num >= 0){

    }



}



function monsters(monsterInfo){

    const main = document.querySelector("#monster-container")
    monsterInfo.forEach(monster => {
        let Div1 = document.createElement("div")
        Div1.className = "card"
        let name = document.createElement("h1")
        name.className = 'h1'
        name.textContent = `Name: ${monster.name}`
        const age = document.createElement("h3")
        age.textContent = `Age: ${monster.age}`
        const description = document.createElement("p")
        description.textContent = `Info: ${monster.description}`

        Div1.append(name,age,description)
        main.appendChild(Div1)
        
 
    })
    monsterForm()
}

function monsterForm(){
    const mainform = document.querySelector("#create-monster")
   
    const form = document.createElement('form')
    const inputName = document.createElement('input')
    const inputAge = document.createElement('input')
    const inputDes = document.createElement('input')
    const inputBtn = document.createElement('input')
    form.id = "form"
    form.className = "form"
    inputName.id = "monster-name"
    inputName.placeholder = "Monster name..."
    inputAge.id = "monster-age"
    inputAge.placeholder = "Monster age"
    inputDes.id = "monster-des"
    inputDes.placeholder = "Monster Description"
    inputBtn.id = 'button'
    inputBtn.type = "submit"
    inputBtn.value = "SUBMIT"

    form.append(inputName,inputAge,inputDes,inputBtn)
    mainform.appendChild(form)

    // const formName = document.querySelector("#form")
    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        // let newName = inputName.value
        // let newAge = inputAge.value
        // let newDes = inputDes.value
        
console.log(typeof (inputName.value))
        console.log( inputName.value, inputAge.value, inputDes.value)
        fetch("http://localhost:3000/monsters",{
            method: "POST",
            header:{
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: "inputName.value",
                age: "inputAge.value",
                description: "inputDes.value",
            }),
        })

        // POST http://localhost:3000/monsters
        // headers:{
        //     "Content-Type": "application/json",
        //     Accept: "application/json"
        // }
        // body:{
        //     name: string,
        //     age: number,
        //     description: string
        // }
            
    })
    // form.reset()
}
getMonster(21)