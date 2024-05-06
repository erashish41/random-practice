       const apiUrl = "https://dummyjson.com/products/1"
        // Fetch JSON data
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Access the JSON data
                const product = data;

                // Create HTML elements to display product details
                
                const productDetails = `
                    <h1>${product.title}</h1>
                    <p>Description: ${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <p>Discount: ${product.discountPercentage}%</p>
                    <p>Rating: ${product.rating}</p>
                    <p>Stock: ${product.stock}</p>
                    <p>Brand: ${product.brand}</p>
                    <p>Category: ${product.category}</p>
                    <img src="${product.thumbnail}" alt="${product.title} Thumbnail">
                    <div>
                        <h2>Product Images</h2>
                        <div>
                            ${product.images.map(image => `<img src="${image}" alt="${product.title} Image">`).join('')}
                        </div>
                    </div>
                `;

                // Insert product details into the HTML
                document.getElementById('product-details').innerHTML = productDetails;
            })
            .catch(error => console.error('Error fetching data:', error));