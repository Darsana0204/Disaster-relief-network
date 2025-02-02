function showAlert(type) {
    let message = "";
    if (type === "assistance") {
        message = "We are here to help! Please contact your nearest relief center.";
    } else if (type === "donate") {
        message = "Thank you for your generosity! Visit our donation page to proceed.";
    } else if (type === "volunteer") {
        message = "Join us in making a difference! Sign up to volunteer.";
    }
    alert(message);
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    this.reset(); 
});

const newsContainer = document.getElementById("news-container");

const newsUpdates = [
    { title: "Relief Teams Deployed", content: "Teams have reached affected areas to distribute aid.", date: "Feb 1, 2025" },
    { title: "New Shelters Set Up", content: "Temporary housing established for 500+ families.", date: "Jan 30, 2025" },
    { title: "Medical Camps Opened", content: "Doctors are providing free treatment in disaster zones.", date: "Jan 28, 2025" }
];

function displayNews() {
    newsContainer.innerHTML = "";
    newsUpdates.forEach(news => {
        const article = document.createElement("article");
        article.classList.add("news-item");
        article.innerHTML = `<h3>${news.title}</h3>
                             <p>${news.content} <span class="date">[${news.date}]</span></p>`;
        newsContainer.appendChild(article);
    });
}

displayNews();
