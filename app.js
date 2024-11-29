
// Question No 1
    
    // var itemsArray = [
    //     { name: "Juice", price: "50", quantity: "3" },
    //     { name: "Cookie", price: "30", quantity: "9" },
    //     { name: "Shirt", price: "880", quantity: "1" },
    //     { name: "Pen", price: "100", quantity: "2" }
    // ];
    
    // let totalItemsPrice = 0;
    
    // itemsArray.forEach(item => {
    //     let totalPrice = parseInt(item.price) * parseInt(item.quantity);
    //     console.log(`Price of ${item.name}: ${totalPrice}`);
    //     totalItemsPrice += totalPrice;
    // });
    
    // console.log(`Total Price of All Items: ${totalItemsPrice}`);

// Question No 2

    // let user = {
    //     name: "Ahsan Hussain",
    //     email: "Ahsan.010@gmail.com",
    //     password: "12345",
    //     age: 25,
    //     gender: "Male",
    //     city: "Karachi",
    //     country: "Pakistan"
    // };
    // console.log("Age Exists:", "age" in user);
    // console.log("Country Exists:", "country" in user);
    // console.log("FirstName Exists:", "firstName" in user);
    // console.log("LastName Exists:", "lastName" in user);

    
// Question NO 3

    // function Product(name, price, quantity) {
    //     this.name = name;
    //     this.price = price;
    //     this.quantity = quantity;
    //     this.calculateTotalPrice = function () {
    //         return this.price * this.quantity;
    //     };
    // }
    
    // let product1 = new Product("Laptop", 60000, 2);
    // let product2 = new Product("Phone", 50000, 4);
    // let product3 = new Product("Tablet", 13000, 1);
    
    // console.log(product1.name, product1.calculateTotalPrice());
    // console.log(product2.name, product2.calculateTotalPrice());
    // console.log(product3.name, product3.calculateTotalPrice());
    
// Question No 4
        
        // function addRecord() {
        //     const name = document.getElementById("name").value.trim();
        //     const gender = document.querySelector('input[name="gender"]:checked')?.value;
        //     const address = document.getElementById("address").value.trim();
        //     const education = document.getElementById("education").value;
        //     const profession = document.getElementById("profession").value;

        //     if (!name || !gender || !address || !education || !profession) {
        //         alert("Please fill in all fields.");
        //         return;
        //     }

        //     const tableBody = document.getElementById("recordsTable").querySelector("tbody");
        //     const newRow = document.createElement("tr");
        //     newRow.innerHTML = `
        //         <td>${name}</td>
        //         <td>${gender}</td>
        //         <td>${address}</td>
        //         <td>${education}</td>
        //         <td>${profession}</td>
        //     `;
        //     tableBody.appendChild(newRow);

        //     document.getElementById("populationForm").reset();
        // }
