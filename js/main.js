// task 1
const ChangeMenu = () =>
  (document.getElementsByClassName("btn-group-vertical")[0].className =
    "btn-group-horizontal");

// task 2

const ChangeHeader = () => {
  const element_jumbotrom = document.getElementsByClassName("jumbotron");

  const style_jumbotrom = element_jumbotrom[0].style;

  style_jumbotrom.backgroundColor = "#586173";
  style_jumbotrom.textAlign = "right";

  element_jumbotrom[0].getElementsByTagName("a")[0].className =
    "btn btn-success btn-lg";
};

// task 3

const ChangeCards = () => {
  const sequence = ["Natureza", "Animais", "Pessoas", "Tecnologia"];

  const listCards = document.getElementsByClassName("col-lg-3");

  const correctSequence = [];

  for (let i = 0; i < sequence.length; i++) {
    for (let k = 0; k < listCards.length; k++) {
      const categoryName =
        listCards[k].getElementsByTagName("h5")[0].textContent;

      categoryName === "Animais" &&
        (listCards[k].getElementsByTagName("a")[0].className =
          "btn btn-success");

      categoryName === sequence[i] && correctSequence.push(listCards[k]);
    }
  }

  for (let i = 0; i < sequence.length; i++) {
    listCards[i].appendChild(
      correctSequence[i].getElementsByClassName("card")[0]
    );
  }
};

// task 4

const ChangeList = () => {
  let text = "";

  const listItems = document.getElementsByClassName("list-group");

  const listNodes = listItems[0].getElementsByTagName("li");

  for (let i = 0; i < listNodes.length; i++) {
    listNodes[i].className = "list-group-item";

    text += `${listItems[0].getElementsByTagName("li")[i]}\n`;
  }

  const newValues = ["Quarto item", "Quinto item"];

  const activeItemIndex = 3;

  for (let i = 0; i < newValues.length; i++) {
    var node = document.createElement("LI");
    node.className = `list-group-item`;
    var textnode = document.createTextNode(newValues[i]);

    node.appendChild(textnode);

    listItems[0].appendChild(node);
  }

  listNodes[activeItemIndex].className = "list-group-item active";
};

ChangeMenu();
ChangeHeader();
ChangeCards();
ChangeList();
