https://github.com/kriskowal/q

const promise = Q.defer();

 const insertQuery = `INSERT INTO ${shopName}_products (name, description, category, sub_category, price, offer, availability) VALUES (?, ?, ?, ?, ?, ?, ?)`;
     db.query(insertQuery, [
        product.name,
        product.description,
        product.category,
        product.sub_category,
        product.price,
        product.offer,
        product.availability
    ], (err, result) => {
        if (err) throw promise.reject(err);
        promise.resolve(result);
    });
  
 return promise;
