/* =========================================
   MADDISON ROSE WEBSITE
   JAVASCRIPT
========================================= */


/* =========================================
   DISCOVER MORE BUTTON
========================================= */

function showMessage() {

    const message =
        document.getElementById("special-message");


    if (
        message.style.display === "none" ||
        message.style.display === ""
    ) {

        message.style.display = "block";

    } else {

        message.style.display = "none";

    }

}


/* =========================================
   EXPLORE BUTTON
========================================= */

function scrollToFavorites() {

    document
        .getElementById("favorites")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   PRINT ENTIRE PAGE
========================================= */

function printPage() {

    window.print();

}


/* =========================================
   FAVORITE ALERTS
========================================= */

function favoriteAlert(favorite) {

    let message = "";


    if (favorite === "Cheetahs") {

        message =
            "🐆 Cheetahs represent speed, confidence, independence, and freedom!";

    }


    else if (favorite === "Roses") {

        message =
            "🌹 Roses represent beauty, elegance, strength, and personality!";

    }


    else if (favorite === "Good Energy") {

        message =
            "💖 Good energy makes everything better!";

    }


    alert(message);

}


/* =========================================
   SAY HELLO
========================================= */

function sayHello() {

    const message =
        document.getElementById("hello-message");


    message.textContent =
        "💕 Hello! Thanks for visiting Maddison Rose's website! 🐆🌹";

}


/* =========================================
   PRINT GREETING
========================================= */

function printMessage() {

    const greeting =
        "Welcome to the Maddison Rose website! 🐆🌹";


    const printWindow =
        window.open(
            "",
            "",
            "width=700,height=500"
        );


    printWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>
                Maddison Rose Greeting
            </title>

        </head>


        <body style="
            font-family: Arial;
            text-align: center;
            padding: 100px;
            background: #fff5fa;
            color: #2b1721;
        ">


            <h1 style="
                color: #d52d7e;
                font-size: 45px;
            ">

                🐆 Maddison Rose 🌹

            </h1>


            <p style="
                font-size: 22px;
            ">

                ${greeting}

            </p>


            <p>

                Be wild. Be fearless.
                Be unapologetically you.

            </p>


        </body>

        </html>

    `);


    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

}


/* =========================================
   ADD ITEMS TO WEBSITE
========================================= */

function addItem() {


    const title =
        document
            .getElementById("item-title")
            .value
            .trim();


    const description =
        document
            .getElementById("item-description")
            .value
            .trim();


    const emoji =
        document
            .getElementById("item-emoji")
            .value
            .trim();


    const category =
        document
            .getElementById("item-category")
            .value;


    /* CHECK TITLE */

    if (title === "") {

        alert(
            "Please enter a title for your item."
        );

        return;

    }


    /* CHECK DESCRIPTION */

    if (description === "") {

        alert(
            "Please enter a description."
        );

        return;

    }


    /* CREATE ITEM */

    const item = {

        id: Date.now(),

        title: title,

        description: description,

        emoji:
            emoji || "✨",

        category: category

    };


    /* GET SAVED ITEMS */

    let items =
        JSON.parse(
            localStorage.getItem(
                "maddisonRoseItems"
            )
        ) || [];


    /* ADD NEW ITEM */

    items.push(item);


    /* SAVE ITEMS */

    localStorage.setItem(

        "maddisonRoseItems",

        JSON.stringify(items)

    );


    /* CLEAR FORM */

    document
        .getElementById("item-title")
        .value = "";


    document
        .getElementById("item-description")
        .value = "";


    document
        .getElementById("item-emoji")
        .value = "";


    /* DISPLAY */

    displayItems();


    /* SUCCESS MESSAGE */

    alert(
        "✨ Your item was added to Maddison's World!"
    );

}


/* =========================================
   DISPLAY ITEMS
========================================= */

function displayItems() {


    const container =
        document.getElementById(
            "user-items"
        );


    let items =
        JSON.parse(
            localStorage.getItem(
                "maddisonRoseItems"
            )
        ) || [];


    /* CLEAR CONTAINER */

    container.innerHTML = "";


    /* NOTHING ADDED */

    if (items.length === 0) {

        container.innerHTML = `

            <div class="empty-items">

                <p>

                    ✨ Nothing has been added yet.
                    Be the first!

                </p>

            </div>

        `;

        return;

    }


    /* CREATE CARDS */

    items.forEach(function(item) {


        const card =
            document.createElement("div");


        card.className =
            "user-card";


        card.innerHTML = `

            <div class="user-card-emoji">

                ${escapeHTML(item.emoji)}

            </div>


            <span class="user-card-category">

                ${escapeHTML(item.category)}

            </span>


            <h3>

                ${escapeHTML(item.title)}

            </h3>


            <p>

                ${escapeHTML(item.description)}

            </p>


            <button

                class="delete-button"

                onclick="deleteItem(${item.id})">

                🗑 Delete

            </button>

        `;


        container.appendChild(card);

    });

}


/* =========================================
   DELETE ITEM
========================================= */

function deleteItem(id) {


    let items =
        JSON.parse(
            localStorage.getItem(
                "maddisonRoseItems"
            )
        ) || [];


    items =
        items.filter(
            function(item) {

                return item.id !== id;

            }
        );


    localStorage.setItem(

        "maddisonRoseItems",

        JSON.stringify(items)

    );


    displayItems();

}


/* =========================================
   HTML SECURITY
========================================= */

function escapeHTML(text) {


    const div =
        document.createElement("div");


    div.textContent = text;


    return div.innerHTML;

}


/* =========================================
   LOAD SAVED ITEMS
========================================= */

window.addEventListener(
    "load",
    function() {

        displayItems();

        console.log(
            "🐆 Maddison Rose website loaded!"
        );

    }
);
