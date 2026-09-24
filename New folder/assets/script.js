/* =========================
       MOBILE MENU
    ========================= */

    function toggleMenu() {

        document
            .getElementById("nav")
            .classList
            .toggle("open");

    }


    function closeMenu() {

        document
            .getElementById("nav")
            .classList
            .remove("open");

    }



    /* =========================
       PRODUCT FILTER
    ========================= */

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const products =
        document.querySelectorAll(".product");


    filterButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            filterButtons.forEach(function(btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const category =
                button.dataset.filter;


            products.forEach(function(product) {

                if (
                    category === "all" ||
                    product.dataset.category === category
                ) {

                    product.classList.remove("hide");

                } else {

                    product.classList.add("hide");

                }

            });

        });

    });



    /* =========================
       CURRENT YEAR
    ========================= */

    document.getElementById("current-year").textContent =
        new Date().getFullYear();
