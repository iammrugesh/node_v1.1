exports.addProductget = (req, res) => {
    res.render("add-product", {

    });
  };

exports.addProductpost = (req, res) =>{
    res.redirect('/product');
};