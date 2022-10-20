function conversa(){
    var conhecer = {
        "oi":"olla, como esta?",
        "estou bem e vc": "Estou bem, obrigado por perguntar",
        "estou bem e voce": "Estou bem, obrigado por perguntar",
        "estou bem e você": "Estou bem, obrigado por perguntar",
        "como se chama": "oi, sou o Victor",
        "quantos anos tem?": "25 anos",
        "Oi":"olla",
        "quem e voce": "oi, sou o Victor",
        "quem e vce": "oi, sou o Victor",
        "quem e vc": "oi, sou o Victor",
        "quem é voce": "oi, sou o Victor",
        "quem é vce": "oi, sou o Victor",
        "quem é vc": "oi, sou o Victor",
        "quantos anos tem": "25 anos"
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user+ "<br>";
    if(user in conhecer){
        document.getElementById("chatLog").innerHTML = conhecer[user] + "<br>";
    }else{
        document.getElementById("chatLog").innerHTML= "Desculpe não sei essa <br>";
    }
}