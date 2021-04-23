const result = document.getElementById('result')
const filter = document.getElementById('filter')

const listItems = []

console.log(listItems)

getData()

// gives us what is typed in
filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('tconstants.json')

    const  results  = await res.json()

    console.log(results)

    // Clear results
    result.innerHTML = ''

    results.forEach(tconstants => {
        console.log(tconstants)

        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
           
          

            <img src="${tconstants.picture}">
            <div class="tconstant-info">
            <h2>Style: ${tconstants.style}</h2>
            <h2>K1: ${tconstants.K1}</h2>
            <h2>K2: ${tconstants.K2}</h2>
            <h2>n: ${tconstants.n}</h2>
            <h2>Time Constant: ${tconstants.Time_Constant} min.</h2>
            
          
            </div>
        `

        result.appendChild(li)

    });
}

// gives us what is being typed in
function filterData(searchTerm) {
    console.log(searchTerm)

    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')   
        }
    })    
}