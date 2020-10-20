const $form = document.querySelector(".myForm")
const $email = document.querySelector(".email-input")
const $label = document.querySelector(".label")
const $error = document.querySelector(".error")
const $success = document.querySelector(".success")

const isEmailValid = (str) => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str)
}

$form.addEventListener("submit", function(e) {
    e.preventDefault()
    $error.textContent = ""
    if(!isEmailValid($email.value)) {
        $error.textContent = "invalid email"
    } else {
        $error.textContent = ""
        $email.value = ""
        $label.classList.remove("small")
        $success.textContent = "You are subscribed"
    }
})

$email.addEventListener("focusin", () => {
    $label.classList.add("small")
})

$email.addEventListener("focusout", (e) => {
    if (e.target.value !== "") {
        $label.classList.add("small")
    } else {
        $label.classList.remove("small")
    }
})

$label.addEventListener("click", () => {
    $label.classList.add("small")
    $email.focus()
})