export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "form";

  const OTPtext = document.createElement("h2");
  OTPtext.innerText = "We have sent an OTP to your Mobile";

  const checkmobile = document.createElement("p");
  checkmobile.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const OTP = document.createElement("OTP");
  OTP.innerText = "*";
  OTP.className = "btn-OTP";

  const OTP1 = document.createElement("OTP1");
  OTP1.innerText = "*";
  OTP1.className = "btn-OTP";

  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  form.append(OTPtext, checkmobile, OTP, OTP1, button);

  return form;
}
