const btn = document.getElementById('btn')
let count = 0

function render() {  
  btn.innerText = `Count: ${count}`
}

btn.addEventListener('click', () => {  
  // Count from 1 to 10.  
  if (count < 10) {    
    count += 1    
    render()  
  }
})