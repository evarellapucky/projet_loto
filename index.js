const checkLoto = (firstname, lastname, email, lotoNumbers) => {
  if (firstname === "") {
    alert("Tu dois rentrer ton prénom");
    return false;
  }

  if (lastname === "") {
    alert("Tu dois rentrer ton nom");
    return false;
  }

  if (email === "") {
    alert("Tu dois rentrer ton adresse email");
    return false;
  }

  const emailRegex = /^[^\s@]{8,30}@[^.\s]+\.[a-zA-Z]{2,3}$/;
  if (!emailRegex.test(email)) {
    alert("Ton adresse email n'est pas valide");
    return false;
  }

  const numbersRegex = /^\d{1,2}(, \d{1,2}){5}$/;
  if (!numbersRegex.test(lotoNumbers)) {
    alert("Tu dois rentrer 6 numéros pour le Loto");
    return false;
  }

  const playerNumbers = lotoNumbers
    .split(",")
    .map((num) => parseInt(num.trim()));
  const winningNumbers = [4, 22, 44, 13, 47, 15];

  const isWinner = playerNumbers.every((number) =>
    winningNumbers.includes(number)
  );
  if (isWinner) {
    alert("Félicitations, vous avez gagné 1 million!!!!!");
  } else {
    alert(`Désolé, vous avez perdu, les nombres gagnants sont: ${winningNumbers.join(", ")}`);
  }

  return true;
};

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const lotoNumbers = document.getElementById("lotoNumbers").value;

  

  const isValid = checkLoto(firstname, lastname, email, lotoNumbers); // Appel de la fonction checkLoto pour vérifier les entrées
});
