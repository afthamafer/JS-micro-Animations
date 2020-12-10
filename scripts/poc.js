

function functieKlikhier() {
    document.getElementById("koptekst").innerHTML = "Welkom bij mijn POC's";
  }
 
 
  var click = 0;
  function aantalKliks(){
     click += 1;
     document.getElementById('aantalKliks').innerHTML = click;
  
    }

