let coinAvailable = parseInt(document.getElementById("coinBtn").innerText)

const callCost = 20;

const headLine = document.getElementById("headline").innerText
const numValue = document.getElementById("num").innerText
let heartCount = parseInt(document.getElementById("heartCounting").innerText)


document.getElementById("callBtn").addEventListener("click", function (e){

if(coinAvailable<=0){
    alert("you can not call, add coin");
    return;
}

    alert("Calling")
    coinAvailable = coinAvailable - callCost;
    

    document.getElementById("coinBtn").innerText = coinAvailable;


    document.getElementById("historyBtn").innerHTML += `
    
        <div class="flex justify-between p-6 m-4 border border-gray-500/5 rounded-2xl bg-gray-500/6">
                        
                        <div>
                        <h1>${headLine}</h1>
                        <p>${numValue}</p>
                        </div>

                        <div>
                            <p>${new Date().toLocaleTimeString()}</p>
                        </div>
                        </div>
    `
    
    
})


document.getElementById("clearBtn").addEventListener("click", ()=>{
    document.getElementById("historyBtn").innerHTML = ""
})



document.getElementById("heartBtn").addEventListener("click", (e) => {

    heartCount += 1;

    document.getElementById("heartCounting").innerText = heartCount;
    
})
