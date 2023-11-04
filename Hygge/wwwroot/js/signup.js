document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.registration-form');
    var successDiv = document.querySelector('.alert-success-template');
    var errorDiv = document.querySelector('.alert-warning-template');
    var submitDiv = document.querySelector('.submitBtn-wrapper');

    window.submitForm = function () {
        var formData = new FormData(document.getElementById('registration-form'));

        $.ajax({
            type: 'POST',
            url: '/Clients/SignUp?handler=OnPost',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.successMessage) {
                    successDiv.classList.add('row', 'mb-3');
                    successDiv.innerHTML = `
                            <div class="alert w-100 my-center alert-success success-wrapper alert-dismissible mt-5 fade show" role="alert">
                            <strong>${response.successMessage}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
                        </div>
                    `;
                    form.appendChild(successDiv);

                    if (errorDiv) {
                        errorDiv.classList.add("unvisible");
                    }
                } else if (response.errorMessage) {
                    errorDiv.classList.add('row', 'mb-3');
                    errorDiv.innerHTML = `
                        <div class="alert mt-5 w-100 alert-warning my-center alert-dismissible fade show" role="alert">
                            <strong>${response.errorMessage}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
                        </div>
                    `;
                    form.appendChild(errorDiv);
                }
            }
        });
    }
});


const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameInput = document.getElementById('name');
const phonelInput = document.getElementById('phone');
const submitBtn = document.querySelector('.js-submit-btn');
const myProgressInd = document.querySelectorAll('.progress-indicator');

function myInputValue(value) {
    value.addEventListener('input', () => {
    value.setAttribute("value", value.value);
});
}


myInputValue(emailInput);
myInputValue(passwordInput);
myInputValue(nameInput);
myInputValue(phonelInput);


const myInputWrapper = document.querySelectorAll(".inputs-wrapper");
const myNextButton = document.querySelector(".next-button");
const mtFirstInputsWrapper = document.querySelector(".first-inputs-wrapper");

const nextBtnText = ["Back", "Next"];

console.log(myInputWrapper.length);
myInputWrapper.forEach((e) => {
    myNextButton.addEventListener("click", () => {
        e.classList.toggle("unvisible");
        myNextButton.textContent = e.classList.contains("unvisible") ? nextBtnText[1] : nextBtnText[0];
    });
});

myProgressInd.forEach((e) => {
    myNextButton.addEventListener("click", () => {
        e.classList.toggle("unvisible");
        myNextButton.textContent = e.classList.contains("unvisible") ? nextBtnText[1] : nextBtnText[0];
    });
});