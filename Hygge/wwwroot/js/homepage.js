const myCard = document.querySelectorAll(".my-card");
let myArray = Array.from(myCard);

if (myArray.length > 0) {
    for (let i = 4; i <= 8; i++) {
        if (myArray[i]) {
            myArray[i].classList.add("mt-5");
        }
    }
}

const myCategories = document.querySelectorAll(".item-category");
const myCategoriesClasses = ["sun-care", "eye-care", "treatments", "moisturizers"];

myCategories.forEach((category, index) => {
    const classToAdd = myCategoriesClasses[index % myCategoriesClasses.length];
    category.classList.add(classToAdd);
});

//AJAX
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('.newsletter-form');
    var successDiv = document.querySelector('.alert-success-template');
    var errorDiv = document.querySelector('.alert-warning-template');

    window.submitForm = function () {
        var formData = new FormData(document.getElementById('newsletter-form'));

        $.ajax({
            type: 'POST',
            url: '/Index?handler=OnPost',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                if (response.successMessage) {
                    successDiv.classList.add('row', 'mb-3');
                    successDiv.innerHTML = `
                        <div class="alert w-75 my-center alert-success alert-dismissible fade show" role="alert">
                            <strong>${response.successMessage}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
                        </div>
                    `;
                    document.getElementById('newsletter-form').appendChild(successDiv);

                    if (errorDiv) {
                        errorDiv.classList.add("unvisible");
                    }
                } else if (response.errorMessage) {
                    errorDiv.classList.add('row', 'mb-3');
                    errorDiv.innerHTML = `
                        <div class="alert alert-warning w-75 my-center alert-dismissible fade show" role="alert">
                            <strong>${response.errorMessage}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="close"></button>
                        </div>
                    `;
                    document.getElementById('newsletter-form').appendChild(errorDiv);
                }
            }
        });
    }
});