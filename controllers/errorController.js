exports.mainError = (req, res) =>{
    res.render("error", {
        path:'/error',
        pageTital:'Error'
    });
  };