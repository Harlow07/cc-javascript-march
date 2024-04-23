async function apiExample(){
    let url = "https://catfact.ninja/fact";
    let response = await fetch(url);
    let catQuote = await response.json();

    //Pick out Quote and display it.
    //document.getElementById('cat-quote').innerHTML = catQuote.fact;
    //document.getElementById('cat-quote').style.color = "Red"

    let quote = document.getElementById("cat-quote");
    quote.innerHTML = catQuote.fact;
    quote.style.textAlign = "center";
    quote.style.width = "70%";
    quote.style.color = "Brown"
   // document.createElement("p").innerHTML = catQuote.fact
    
}


apiExample();