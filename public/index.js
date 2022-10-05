var text = ["Carrots.", "Water.", "Kombucha.", "Tea.", "Lemonade.", "Topo Chico.", "Coffee.", "Juice.", "Water.", "Green Tea.", "Coffee?"];
var counter = 0;
var drinks = document.getElementById("drinkText");
var inst = setInterval(change, 1100);

function change() {
  drinks.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
     clearInterval(inst); //stop refreshing after one cycle
  }
}


