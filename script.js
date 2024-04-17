const api_key="https://api.quotable.io/random";
const quote=document.querySelector('.quote');
const author=document.querySelector('.author');

async function getquote(url){
    const response= await fetch (url);
    var data=await response.json();

    console.log(data);

    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}

getquote(api_key);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML+"--- by"+author.innerHTML,"Tweet Window","width=600px,height=300px");
}

