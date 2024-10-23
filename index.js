

// const testDiv = document.getElementById('test')
// const testDiv = document.getElementsByClassName('queryClass')
// const testDiv = document.getElementsByTagName('div')
// const testDiv = document.querySelector('#test')
// const testDiv = document.querySelector('.querySelector')
// const testDiv = document.querySelectorAll('#test')

// console.log(testDiv)

// // testDiv.classList.add('testClass')
// teatDiv[0].classList.add('testClass')

const toDoList = []

const addToDoInput = document.getElementById('addToDoInput')
const addToDoBtn = document.getElementById('addToDoBtn')
const toDoListWrapper = document.getElementById('toDoList')
const completedToDo = document.getElementById('completedToDo')

const renderList = () => {
    toDoListWrapper.innerHTML = ''
    completedToDo.innerHTML = ''

    toDoList.forEach((item) => {
        const itemParent = document.createElement('div')
        itemParent.classList.add('listItem')
        const p = document.createElement('p')
        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.checked = item.done
        p.innerText = item.title

        itemParent.appendChild(checkBox)
        itemParent.appendChild(p)

        const parent = item.done ? completedToDo : toDoListWrapper
        parent.appendChild(itemParent)
    })
}


const addToDo = () => {
    if(toDoList.includes(addToDoInput.value)) return alert('to not')

        toDoList.push({title: addToDoInput.value, done: true})
        addToDoInput.value = ''
        renderList()
}

addToDoBtn.addEventListener('click', addToDo)