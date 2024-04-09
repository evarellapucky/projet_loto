const checkLoto = (firstname, lastname, email, lotoNumbers) => {
  if (firstname === "") {
    alert("Tu dois rentrer ton prénom");
    return false;
  };

  if (lastname === "") {
    alert("Tu dois rentrer ton nom");
    return false;
  };

  if (email === "") {
    alert("Tu dois rentrer ton adresse email");
    return false;
  };

  const emailRegex = /^[^\s@]{8,30}@[^.\s]+\.[a-zA-Z]{2,3}$/;
  if (!emailRegex.test(email)) {
    alert("Ton adresse email n'est pas valide");
    return false;
  };

  const numbersRegex = /^\d{1,2}(,\d{1,2}){5}$/;
  if (!numbersRegex.test(lotoNumbers)) {
    alert("Tu dois rentrer 6 numéros valides pour le Loto");
    return false;
  }

    alert("tu as correctement rempli le forumlaire")
  return true;
};

const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const lotoNumbers = document.getElementById("lotoNumbers").value;

    console.log("Numéros Loto entrés:", lotoNumbers);

    const isValid = checkLoto(firstname, lastname, email, lotoNumbers); // Appel de la fonction checkLoto pour vérifier les entrées
})

