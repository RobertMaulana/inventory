let db = require("./models");

class Products {
  constructor() {
  }

  add(data){
    db.Product
    .create(data)
    .then((datanya) => {
      console.log(datanya);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  update(update){
    db.Product
      .findAll(
        {where: {id: update.id}}
      )
      .then((data) => {
        db.Product
          .update(
            {productId: update.productId, nama_product: update.nama_product, harga: update.harga, quantity: update.quantity, categoryId: update.categoryId},
            {where: {id: update.id}}
        ).then((updated) => {
          console.log(updated);
        })
        .catch((err) => {
          console.log(err);
        })
      })
  }

  delete(id){
    db.Product
      .destroy(
        {where: {id: id}}
      )
      .then(()=> {
        console.log("data terhapus!");
      })
      .catch(()=>{
        console.log("error");
      })
  }

  findAll(){
    db.Product
      .findAll()
      .then((data) => {
        data.forEach((datas) => {
          console.log(datas.dataValues);
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

let create = {
  productId: 405,
  nama_product: "pensil",
  harga: "3000",
  quantity: 20,
  categoryId: 1001
}

let update = {
  id: 4,
  productId: 401,
  nama_product: "buku",
  harga: "3000",
  quantity: 20,
  categoryId: 1001
}

let test = new Products();
test.add(create);
// test.update(update)
// test.delete(4)
// test.findAll()
