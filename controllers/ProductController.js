exports.Productget = (req, res) => {
  res.render("product", {
    path:'/product',
    pageTital:'Product List'
  });
};