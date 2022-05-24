function createMail(text) {
  var commentHTML = document.createElement("div");
  commentHTML.addEventListener("click", function (event) {
    commentHTML.parentElement.removeChild(commentHTML);
  });

  var img = document.createElement("img");
  img.src = "avatar-picture.png";
  commentHTML.appendChild(img);

  var commentHeader = document.createElement("h3");
  commentHeader.innerText = "berhecielena@gmail.com";
  commentHTML.appendChild(commentHeader);

  var mailHTML = document.createElement("p");
  mailHTML.innerText = text;
  commentHTML.appendChild(mailHTML);

  var inputButton = document.createElement("button");
  inputButton.innerText = "Delete";
  inputButton.type = "button";
  commentHTML.appendChild(inputButton);

  return commentHTML;
}

var mailList = [
  "In academic writing, readers expect each paragraph to have a sentence or two that captures its main point. They’re often called “topic sentences,” though many writing instructors prefer to call them “key sentences.” There are at least two downsides of the phrase “topic sentence.” First, it makes it seem like the paramount job of that sentence is simply to announce the topic of the paragraph. Second, it makes it seem like the topic sentence must always be a single grammatical sentence. Calling it a “key sentence” reminds us that it expresses the central idea of the paragraph. And sometimes a question or a two-sentence construction functions as the key.",
  "Can't wait to go to work",
  "Modify the code please",
  "For the most part, a text reads smoothly when it conveys a thoughtful and well organized argument or analysis. Focus first and most on your ideas, on crafting an ambitious analysis. The most useful guides advise you to first focus on getting your ideas on paper and then revising for organization and word choice later, refining the analysis as you go. Thus, consider the advice here as if you already have some rough text written and are in the process of smoothing out your prose to clarify your argument for both your reader and yourself.",
  "We don't have much time left",
];

var boxHTML = document.createElement("text");
for (var i = 0; i < mailList.length; i++) {
  var mailValue = mailList[i];
  var itemHTML = createMail(mailValue);
  boxHTML.appendChild(itemHTML);
  itemHTML.onclick = function () {
    console.log("S-a dat click pe", itemHTML);
    boxHTML.removeChild(itemHTML);
  };
}

document.body.appendChild(boxHTML);
var mailInput = document.getElementById("to-do-input");
var mailButton = document.getElementById("to-do-button");

mailButton.onclick = function () {
  console.log("se da click! valoare din input este", mailInput.value);
  var itemNou = createMail(mailInput.value);
  boxHTML.appendChild(itemNou);
};
