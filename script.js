const getTextColorClass = text => {
  if (text.length > 3) return "list-group-item-success";
  if (text.match(/[!@#$%^&*(),.?":{}|<>]/)) return "list-group-item-danger";

  return "";
}

const appendText = text => {
  const node = document.createElement("LI");
  node.title = text;
  node.className += `list-group-item text-truncate ${getTextColorClass(text)}`;

  const textNode = document.createTextNode(text);
  node.appendChild(textNode);

  const lines = document.querySelector(".js-lines");
  lines.appendChild(node);
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".js-form");

  form.onsubmit = event => {
    event.preventDefault()

    const input = document.querySelector(".js-input");
    appendText(input.value)
    input.value = "";
  };
});
