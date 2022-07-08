$(document).ready(function() {
    generate();
});

/* Gestion du onclick */
const handleclick = (value) => {
	checkValue(value);
}

function checkValue(value) {
    const image = document.getElementById("imgGrec");
    switch(value){
        case "alpha":
            if(image.getAttribute('src') == "./images/alpha.png"){
                alert("Et oui c'était Alpha"); 
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "beta":
            if(image.getAttribute('src') == "./images/beta.png"){
                alert("Et oui, c'était Beta");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "gamma":
            if(image.getAttribute('src') == "./images/gamma.png"){
                alert("Et oui c'était Gamma");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "delta":
            if(image.getAttribute('src') == "./images/delta.png"){
                alert("Et oui c'était Delta"); 
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "epsilon":
            if(image.getAttribute('src') == "./images/epsilon.png"){
                alert("Et oui, c'était Epsilon");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "zeta":
            if(image.getAttribute('src') == "./images/zeta.png"){
                alert("Et oui c'était Zeta");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "eta":
            if(image.getAttribute('src') == "./images/eta.png"){
                alert("Et oui c'était Eta");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "theta":
            if(image.getAttribute('src') == "./images/theta.png"){
                alert("Et oui, c'était Theta");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "iota":
            if(image.getAttribute('src') == "./images/iota.png"){
                alert("Et oui c'était Iota");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "kappa":
            if(image.getAttribute('src') == "./images/kappaa.png"){
                alert("Et oui c'était Kappa"); 
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "lambda":
            if(image.getAttribute('src') == "./images/lambda.png"){
                alert("Et oui, c'était Lambda");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "mu":
            if(image.getAttribute('src') == "./images/mu.png"){
                alert("Et oui c'était Mu");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "nu":
            if(image.getAttribute('src') == "./images/nu.png"){
                alert("Et oui c'était Nu"); 
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "xi":
            if(image.getAttribute('src') == "./images/xi.png"){
                alert("Et oui, c'était Xi");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "omicron":
            if(image.getAttribute('src') == "./images/omicron.png"){
                alert("Et oui c'était Omicron");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "pi":
            if(image.getAttribute('src') == "./images/pi.png"){
                alert("Et oui c'était Pi"); 
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "rho":
            if(image.getAttribute('src') == "./images/rho.png"){
                alert("Et oui, c'était Rho");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "sigma":
            if(image.getAttribute('src') == "./images/sigma.png"){
                alert("Et oui c'était Sigma");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "tau":
            if(image.getAttribute('src') == "./images/tau.png"){
                alert("Et oui c'était Tau"); 
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "upsilon":
            if(image.getAttribute('src') == "./images/upsilon.png"){
                alert("Et oui, c'était Upsilon");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "phi":
            if(image.getAttribute('src') == "./images/phi.png"){
                alert("Et oui c'était Phi");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "chi":
            if(image.getAttribute('src') == "./images/chi.png"){
                alert("Et oui c'était Chi");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "psi":
            if(image.getAttribute('src') == "./images/psi.png"){
                alert("Et oui, c'était Psi");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        case "omega":
            if(image.getAttribute('src') == "./images/omega.png"){
                alert("Et oui c'était Omega");
                updateScore(1);
            }
            else {
                updateScore(0);
            }
            generate();
        break;
        default:
        break;
    }
}

function generate(){
    const r = (Math.floor(Math.random() * 24) +1);
    console.log("Valeur à trouver : " + r);
    const imgGrec = document.getElementById("imgGrec");
    switch(r){
        case 1:
            imgGrec.src = "./images/alpha.png"
            break;
        case 2:
            imgGrec.src = "./images/beta.png"
            break;
        case 3:
            imgGrec.src = "./images/gamma.png"
            break;
        case 4:
            imgGrec.src = "./images/delta.png"
            break;
        case 5:
            imgGrec.src = "./images/epsilon.png"
            break;
        case 6:
            imgGrec.src = "./images/zeta.png"
            break;
        case 7:
            imgGrec.src = "./images/eta.png"
            break;
        case 8:
            imgGrec.src = "./images/theta.png"
            break;
        case 9:
            imgGrec.src = "./images/iota.png"
            break;
        case 10:
            imgGrec.src = "./images/kapa.png"
            break;    
        case 11:
            imgGrec.src = "./images/lambda.png"
            break;
        case 12:
            imgGrec.src = "./images/mu.png"
            break;
        case 13:
            imgGrec.src = "./images/nu.png"
            break;
        case 14:
            imgGrec.src = "./images/xi.png"
            break;
        case 15:
            imgGrec.src = "./images/omicron.png"
            break;
        case 16:
            imgGrec.src = "./images/pi.png"
            break;
        case 17:
            imgGrec.src = "./images/rho.png"
            break;
        case 18:
            imgGrec.src = "./images/sigma.png"
            break;
        case 19:
            imgGrec.src = "./images/tau.png"
            break;
        case 20:
            imgGrec.src = "./images/upsilon.png"
            break;
        case 21:
            imgGrec.src = "./images/phi.png"
            break;
        case 22:
            imgGrec.src = "./images/chi.png"
            break;
        case 23:
            imgGrec.src = "./images/psi.png"
            break;
        case 24:
            imgGrec.src = "./images/omega.png"
            break;   
        default:
        break
    }
}

function updateScore(i){
/*
    let score = $("#combo").text();
    if (i == 1){
        score +=1;
        console.log(score);
    }
    else {
        score = "0";
    }
    $("#combo").text() = score;
    */
}


