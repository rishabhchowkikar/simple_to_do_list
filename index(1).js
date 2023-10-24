const label_input = document.querySelector(".form__input");
const add_button = document.querySelector(".button-33");
const list = document.querySelector(".list");

// adding the work using add button
add_button.addEventListener("click", () => {
  let inputValue = label_input.value;
  console.log(`Hello, ${inputValue}`);

  if (inputValue == "") alert("assign some work before starting");
  else {
  }
  //   console.log(work_array);
  const main_div = document.createElement("div");
  const para = document.createElement("p");
  const button = document.createElement("button");

  para.className = "para";
  para.textContent = `${inputValue}`;

  let counter = 0;
  const tick = document.createElement("p");
  para.addEventListener("click", () => {
    if (counter == 0) {
      tick.innerHTML = `&#10003; Done`;
      tick.style.color = "#fff";
      para.appendChild(tick);
      counter = 1;
      para.style.transition = "0.5s";
    } else {
      para.removeChild(tick);
      para.style.transition = "0.5s";
      counter = 0;
    }
  });

  button.textContent = "Delete";
  button.className = "button-28";
  button.addEventListener("click", () => {
    alert(`${inputValue}, work deleted`);
    main_div.remove();
  });

  para.appendChild(button);
  main_div.appendChild(para);
  console.log(main_div);
  list.appendChild(main_div);
});
