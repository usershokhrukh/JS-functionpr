const elTitleSpan = document.querySelectorAll(".box__title-span");
const elTextSpan = document.querySelectorAll(".box__text-span");
const elText = document.querySelectorAll(".box__texts");
const elNotice = document.querySelector(".notificate");
function plusFunction(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function minusFunction(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function divideFunction(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function multiFunction(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function pifagorFunction(firsNumber, secondNumber) {
  return firstNumberUser ** 2 + secondNumber ** 2;
}

alert("===========The numbers will work==========");
const firstNumberUser = +prompt("Please enter first number: ").trim();
elTitleSpan[0].textContent = firstNumberUser;
const secondNumberUser = +prompt("and second number: ").trim();
elTitleSpan[1].textContent = secondNumberUser;

// alert("Do you want answers in console? [escape/Enter] (double press): ");
elNotice.style.cssText = `
  animation-name: show;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
`;
let repeat = false;

const functionApprove = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape" && !repeat) {
      repeat = true;

      elNotice.style.cssText = `
        animation-name: hide;
        animation-duration: 0.3s;
      `;

      elTextSpan[0].style.cssText = `
        animation-name: jumping;
        animation-duration: 0.3s;
      `;
      elTextSpan[0].textContent = plusFunction(
        firstNumberUser,
        secondNumberUser
      );

      elTextSpan[1].style.cssText = `
        animation-name: jumping;
        animation-duration: 0.3s;
        animation-delay: 0.3s;
      `;
      elTextSpan[1].textContent = minusFunction(
        firstNumberUser,
        secondNumberUser
      );

      elTextSpan[2].style.cssText = `
        animation-name: jumping;
        animation-duration: 0.3s;
        animation-delay: 0.6s;
      `;
      elTextSpan[2].textContent = divideFunction(
        firstNumberUser,
        secondNumberUser
      ).toFixed(3);

      elTextSpan[3].style.cssText = `
        animation-name: jumping;
        animation-duration: 0.3s;
        animation-delay: 0.9s;
      `;
      elTextSpan[3].textContent = multiFunction(
        firstNumberUser,
        secondNumberUser
      );

      elTextSpan[4].style.cssText = `
        animation-name: jumping;
        animation-duration: 0.3s;
        animation-delay: 1.2s;
      `;
      elTextSpan[4].textContent = Math.sqrt(
        pifagorFunction(firstNumberUser, secondNumberUser)
      ).toFixed(3);
    } else if (e.key == "Enter" && !repeat) {
      repeat = true;

      elNotice.style.cssText = `
        animation-name: hide;
        animation-duration: 0.3s;
      `;

      elText[0].style.cssText = `
        animation-name: toPath;
        animation-duration: 0.4s;
      `;
      elText[0].textContent = "Sum in console";

      elText[1].style.cssText = `
        animation-name: toPath;
        animation-duration: 0.4s;
        animation-delay: 0.1s;
      `;
      elText[1].textContent = "Minus in console";

      elText[2].style.cssText = `
        animation-name: toPath;
        animation-duration: 0.4s;
        animation-delay: 0.2s;
      `;
      elText[2].textContent = "Divide in console";

      elText[3].style.cssText = `
        animation-name: toPath;
        animation-duration: 0.4s;
        animation-delay: 0.3s;
      `;
      elText[3].textContent = "Multiply in console";

      elText[4].style.cssText = `
        animation-name: toPath;
        animation-duration: 0.4s;
        animation-delay: 0.4s;
      `;
      elText[4].textContent = "Hypotenuse in console";
      console.log(
        `~~~~~~~~~~Numbers: ${firstNumberUser} & ${secondNumberUser}\n`
      );
      console.log(
        `~~~~Sum is ${plusFunction(firstNumberUser, secondNumberUser)}\n`
      );
      console.log(
        `~~~~Minus is ${minusFunction(firstNumberUser, secondNumberUser)}\n`
      );
      console.log(
        `~~~~Divide is ${divideFunction(firstNumberUser, secondNumberUser)}\n`
      );
      console.log(
        `~~~~Multiply is ${multiFunction(firstNumberUser, secondNumberUser)}\n`
      );
      console.log(
        `~~~~Hypotenuse is ${Math.sqrt(
          pifagorFunction(firstNumberUser, secondNumberUser)
        ).toFixed(3)}`
      );
    }
  });
};

functionApprove();
