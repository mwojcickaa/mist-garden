// TTo ma się wykonać gdy strona sie załaduje!!

// function checkRefresh () {
//    if (document.refreshForm.visited.value = "")
//    {
//       if (window.innerWidth < 300) {
//          let captchaContainer = document.getElementById("captcha-container")
//          captchaContainer.removeAttribute("")
//          let newDivCaptcha = document.createElement("div")
//          newDivCaptcha.setAttribute("class", "h-captcha")
//          newDivCaptcha.setAttribute("data-captcha", "true")
//          newDivCaptcha.setAttribute("data-size", "compact")
//          captchaContainer.appendChild(newDivCaptcha);
//       }
//    }
// }


if (window.innerWidth < 414) {
   let captchaContainer = document.getElementById("captcha-container")
   captchaContainer.innerHTML = ""
   let newDivCaptcha = document.createElement("div")
   newDivCaptcha.setAttribute("class", "h-captcha")
   newDivCaptcha.setAttribute("data-captcha", "true")
   newDivCaptcha.setAttribute("data-size", "compact")
   captchaContainer.appendChild(newDivCaptcha);
} 