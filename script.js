var myForm = document.getElementById("myform");

myForm.addEventListener("submit", function (event) {


    var nomeElement = document.getElementById("nome");
    var kmpercorsiElement = document.getElementById("kmpercorsi");
    var etaElement = document.getElementById("eta");

    event.preventDefault();


    var nome = nomeElement.value;
    var kmpercorsi = kmpercorsiElement.value;
    var eta = etaElement.value;

    function prezzoBiglietto(laMiaEta, kmDaFare) {
        if (laMiaEta === "Minorenne") {
            return ((0.21 * kmDaFare) - ((0.21 * kmDaFare) * 0.20)).toFixed(2)
        }
        if (laMiaEta === "Over 65") {
            return ((0.21 * kmDaFare) - ((0.21 * kmDaFare) * 0.40)).toFixed(2)
        }
        if (laMiaEta === "Maggiorenne") {
            return (0.21 * kmDaFare).toFixed(2)
        }

    }
    var scontistica = "";
    if (eta === "Minorenne") {
        scontistica = "Sconto del 20% applicato ai minori"
    } else if (eta === "Maggiorenne") {
        scontistica = "Nessuna scontistica applicata"
    } else {
        scontistica = "Sconto del 40% applicato agli over 65"
    }

    function generaNumeroCp() {
        return Math.ceil(Math.random() * 10000) + 90000

    }

    function generaNumeroCarrozza() {
        return Math.ceil(Math.random() * 20)
    }



    console.log(prezzoBiglietto(eta, kmpercorsi))
    console.log(nome);
    document.getElementById("nomePasseggero").innerHTML = nome;
    console.log(generaNumeroCarrozza());
    document.getElementById("nomeCarrozza").innerHTML = generaNumeroCarrozza();
    console.log(scontistica);
    document.getElementById("scontoApplicato").innerHTML = scontistica;

    console.log(kmpercorsi);
    console.log(eta);
    console.log(generaNumeroCp());
    document.getElementById("codiceCp").innerHTML = generaNumeroCp();
    document.getElementById("costoBiglietto").innerHTML = (prezzoBiglietto(eta, kmpercorsi));
})

myForm.addEventListener("reset", function () {
    console.log("reset")
})