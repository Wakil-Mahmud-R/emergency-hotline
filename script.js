let coinAvailable = parseInt(document.getElementById("coinBtn").innerText)

const callCost = 20;
let heartCount = parseInt(document.getElementById("heartCounting").innerText);


let copyCount = parseInt(document.getElementById("copyCount").innerText);



document.getElementById("cardContainer").addEventListener("click", (e)=>{
    if(e.target.closest(".callBtn")){

        //not event delegation just delegation inside evnet delegation
        // take parent first 
        // then aim child within
        //delegating → then delegating again inside the handler.
        //this is how we get inside element of class by delegation
        const card = e.target.closest(".a-card");
        const title = card.querySelector(".headline").innerText
        const number = card.querySelector(".num").innerText

        if(coinAvailable<callCost){
            alert("not enough coin, add coin")

            return
        }
        alert("calling")
        coinAvailable = coinAvailable - callCost;

        document.getElementById("coinBtn").innerText = coinAvailable;


        document.getElementById("historyBtn").innerHTML += `
        <div class="flex justify-between p-6 m-4 border border-gray-500/5 rounded-2xl bg-gray-500/6">
                        
                        <div>
                        <h1>${title}</h1>
                        <p>${number}</p>
                        </div>

                        <div>
                            <p>${new Date().toLocaleTimeString()}</p>
                        </div>
                        </div>
        `
        

    }
    
    
})


document.getElementById("clearBtn").addEventListener("click", ()=>{
    document.getElementById("historyBtn").innerHTML = ""
})


document.addEventListener("click",(e)=>{
    if(e.target.closest(".heartBtn")){
        heartCount += 1;

    document.getElementById("heartCounting").innerText = heartCount;

    }
})


document.addEventListener("click",(e)=>{
    if(e.target.closest(".copyBtn")){


        //as the .num is a class and we want its inside content we need delegation again
        const card = e.target.closest(".a-card");
        const copyNum = card.querySelector(".num").innerText;

        navigator.clipboard.writeText(copyNum);
        alert("copied")


        copyCount += 1;


        document.getElementById("copyCount").innerText = copyCount;
    }
})

