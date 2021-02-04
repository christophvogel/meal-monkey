// import { createElement } from "../../utils/createElement";

// function createOTPInputElement() {
//   const input = createElement("input", {
//     className: "input",
//     placeholder: "*",
//     type: "password",
//     maxLength: 1,
//   });
//   return input;
// }

// export function createVerifyForm() {
//   const form = document.createElement("form");
//   form.className = "form";

//   const title = document.createElement("h2");
//   title.innerText = "We have sent an OTP to your Mobile";

//   const text = document.createElement("p");
//   text.innerText =
//     "Please check your mobile number 071*****12 continue to reset your password";

//   const otpOne = createOTPInputElement();
//   const otpTwo = createOTPInputElement();
//   const otpThree = createOTPInputElement();
//   const otpFour = createOTPInputElement();
//   const passwordContainer = createElement("div", {
//     className: "form__otp",
//     children: [otpOne, otpTwo, otpThree, otpFour],
//   });

//   const button = document.createElement("button");
//   button.innerText = "Next";
//   button.className = "btn";

//   const hint = document.createElement("p");
//   hint.innerText = "Didn't Receive?";
//   hint.className = "form__hint";

//   const resendLink = document.createElement("a");
//   resendLink.innerText = "Click Here";
//   resendLink.href = "#";

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const secretPassword = "1234";
//     const OTPInput = `${otpOne.value}${otpTwo.value}${otpThree.value}${otpFour.value}`;

//     if (OTPInput === secretPassword) {
//       alert("Your OTP is: " + OTPInput + " - That is correct!");
//     } else {
//       alert("Your OTP is: " + OTPInput + " - That is WRONG");
//     }
//   });

//   hint.append(resendLink);

//   form.append(title, text, passwordContainer, button, hint);
//   return form;
// }
import { createElement } from "../../utils/createElement";

function createInputElement() {
  return createElement("input", {
    className: "input",
    placeholder: "*",
    type: "number",
    maxLength: 1,
    min: 0,
    max: 9,
  });
}

export function createVerifyForm() {
  const inputElement1 = createInputElement();
  const inputElement2 = createInputElement();

  const inputElement3 = createInputElement();

  const inputElement4 = createInputElement();

  return createElement("form", {
    className: "form",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your Mobile",
      }),
      createElement("p", {
        innerText:
          "Please check your mobile number 071*****12 continue to reset your password",
      }),
      createElement("div", {
        className: "form__otp",
        children: [inputElement1, inputElement2, inputElement3, inputElement4],
      }),
      createElement("input", {
        type: "submit",
        innerText: "Next",
        className: "btn",
      }),
      createElement("p", {
        innerText: "Didn't Receive?",
        className: "form__hint",
        children: [
          createElement("a", {
            innerText: "Click here",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();
      const password =
        inputElement1.value +
        inputElement2.value +
        inputElement3.value +
        inputElement4.value;
      if (password === "3217") {
        alert("Welcome!");
      } else {
        alert("You shall not pass!");
      }
    },
  });
}
