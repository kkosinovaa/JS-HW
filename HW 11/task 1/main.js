fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartObj => {
        const { carts } = cartObj;
        console.log(carts);

        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');

            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
            "total": ${cart.total}
            "discountedTotal" : ${cart.discountedTotal}
            "userId" : ${cart.userId}
            "totalProducts" : ${cart.totalProducts}
            "totalQuantity" : ${cart.totalQuantity}
            "id" : ${cart.id}
            `;

            const olList = document.createElement('ol');

            for (const product of cart.products) {
                const li = document.createElement('li');
                li.innerText = `
                "discountPercentage" : ${product.discountPercentage}
                "discountedTotal" : ${product.discountedTotal}
                "id" : ${product.id}
                "price" : ${product.price}
                "quantity" : ${product.quantity}
                "title" : ${product.title}
                "total" : ${product.total}
                `;
                const img = document.createElement('img');
                img.src = product.thumbnail;
                img.width = 100;
                li.appendChild(img);
                olList.appendChild(li);
            }

            divWithInfo.appendChild(olList);
            div.appendChild(divWithInfo);

            const all = document.getElementById('all');
            all.appendChild(div);
        }
    });
