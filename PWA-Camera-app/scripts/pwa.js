        $(document).ready(function() {
            geoFindMe();

            $(".cont-cart, .store-choice a").click(function() {
                var imageQty = $('#result .image-container').length;
                $("#cart-details div").replaceWith("<div id='cart-details-qty'>You have ordered " + imageQty + " images</div>");
                console.log("Quantity has been registered");
            });

            $(".store-choice a").on('click', function() {
                $(".store-choice a").removeClass("selected");
                $(this).addClass("selected");
            })

            $(".cont-cart").click(function() {
                var selectedStore = $(".store-choice .selected").clone();
                $(".your-store a").replaceWith(selectedStore);
            });


        });