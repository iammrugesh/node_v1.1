exports.addProductget = (req, res) => {
  res.render("add-product", {
    path:'/admin/add-product',
    pageTital:'Add Product'
  });
};

exports.addProductpost = (req, res) =>{
  res.redirect('/product');
};