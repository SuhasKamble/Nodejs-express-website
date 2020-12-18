const quote = document.getElementById('quote')
const author = document.getElementById('author')
const btn = document.querySelector('.btn')
const api = "https://type.fit/api/quotes"

function get_quote(){
    fetch(api).then((res)=>res.json())
    .then((data)=>{
    console.log(data[0])
        
        let randomNum = Math.floor(Math.random()*data.length)
        console.log(randomNum)
        quote.innerHTML=data[randomNum].text
        author.innerHTML=`by ${data[randomNum].author}`
    
    })
}


get_quote()

btn.addEventListener('click',()=>{
    get_quote()
})
