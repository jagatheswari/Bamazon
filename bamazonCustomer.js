const {createConnection} = require('mysql2')

const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root4Jags',
    database: 'bamazon_db'
})

const inquirer = require('inquirer')
// Displaying the product details info from database
let displayItems = _ => {
  db.connect(e => {
      if(e) {console.log(e)}
      db.query('SELECT * FROM products1', (e, data)=> {
          if(e) {console.log(e)}
          for (i = 0; i < 10; i++)
          console.log(`
              ID: ${data[i].id}
              ProductName: ${data[i].productname}
              DepartmentName: ${data[i].departmentname}
              Price: ${data[i].price}
              StockQuantity: ${data[i].stockquantity}
          `)
          placeOrder()
      })
  })
}
  displayItems()
//  prompting the message to the customer
function placeOrder() {
  inquirer.prompt([
      {
          type: 'input',
          name: 'id',
          message: 'Which product id would you like to buy?'
      },
      {
          type: 'input',
          name: 'quantity',
          message: 'How many units of the product you would like to buy?'
      }
  ])
  .then(({id,quantity})=> {
      console.log(id)
      console.log(quantity)
      checkStock(id,quantity)
    })
  .catch(e => console.log(e))  
}
// Creating a function to show the order list and update the price
let checkStock = (id, quantity) => {
  db.query(`SELECT * FROM products1 WHERE id = ${id}`, (e, 
      [{productname, price, stockquantity}])=> {
          if(e) throw e
          if(stockquantity => quantity) {
              console.log(`${stockquantity}`)
              console.log(`
                  Order List!!
                  Quantity: ${quantity}
                  Product Name: ${productname}
                  TOTAL COST: ${price * quantity}
              `)
          }
      })
}
// creating a function to update the quantity in db
let quantityAvailability = (id,stockquantity) => {
  db.query('UPDATE products1 SET ? WHERE stockquantity = ?'), (e,
    [{id,quantity}]) => {
      if(e) throw e
      if(quantity > stockquantity) {
        console.log('Insufficient Items!!')
      }

    }
}



