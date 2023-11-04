
const logo = document.querySelector(".navbar-brand");
const myCategory = document.querySelectorAll(".my-category");

for (const item of myCategory) {
    console.log(item.getAttribute('value'));

    if (item.getAttribute('value') === "EYE CARE") {
        item.classList.add("eye-care");
    }
    else if (item.getAttribute('value') === "TREATMENTS") {
        item.classList.add("treatments");
    }
    else if (item.getAttribute('value') === "MOISTURIZERS") {
        item.classList.add("moisturizers");
    }
    else if (item.getAttribute('value') === "SUN CARE") {
        item.classList.add("sun-care");
    }
}

const myDiscount = document.querySelectorAll(".my-discount");
for (const item of myDiscount) {
    if (item.textContent === "0") {
        item.style.display = "none";
    }
}


//for (let i = 0; i < toggleButton.length; i++)






const myArticle = document.querySelectorAll(".js-article");
const myArticleArray = Array.from(myArticle);
const myRecentArticle = document.querySelectorAll(".recent-article");

// if (myArticleArray.length > 0) {
//     myArticleArray[1].classList.add("my-articles-width ");
//     myArticleArray[2].classList.add("my-articles-width");
//     myArticleArray[3].classList.add("my-articles-width");
//     myArticleArray[4].classList.add("my-articles-width");



// }

// Footer rendering
const categoriesContainer = document.getElementById('categories-container');
const templateCategories = document.getElementById('categories-template');

const legalContainer = document.getElementById('legal-container');
const templateContainer = document.getElementById('legal-template');

const companyContainer = document.getElementById('company-container');
const templateCompany = document.getElementById('company-template');

const categories = ["On Sale", "Featured", "Masks", "Eye Care", "Moisturizers", "Treatments", "Night Care", "Sun Care"];
const legals = ["Terms of Service", "Privacy Policy", "Return Policy", "Shipping", "Data Protection"];
const companys = ["About", "Team", "Contact", "Careers", "Vision", "Culture"];

function footerItem(value, myCategory, myTemplate, categoryCont) {
    value.forEach((e) => {
        const template = document.importNode(myTemplate.content, true);
        const text = template.querySelector(`.${myCategory}`);
        text.textContent = e;

        categoryCont.appendChild(template);
    })
}

footerItem(categories, "category", templateCategories, categoriesContainer);
footerItem(legals, "legal", templateContainer, legalContainer);
footerItem(companys, "company", templateCompany, companyContainer);



