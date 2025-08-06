const products = require("../model/productModel");

exports.productAddController = async (req, res) => {
  const { productname, productId, price, quantityinStock, category } = req.body;

  try {
    const newProduct = await products({
      productname,
      productId,
      price,
      quantityinStock,
      category,
    });

    await newProduct.save();

    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get prod
exports.productGetController = async (req, res) => {
 // const searchkey= req.query.search
  try {
    // const query ={
    //   productname:{
    //     $regex: searchkey,
    //     $options :"i"
    //   }
    // }
    const allProduct = await products.find();

    res.status(200).json(allProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete prod

exports.productDeleteController = async (req, res) => {
  const { id } = req.params;
  try {
    const prodDelete = await products.findOneAndDelete({ _id: id });

    res.status(200).json(prodDelete);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a prod
exports.productGetAController = async (req, res) => {
  const { id } = req.params;
  try {
    const aProduct = await products.findOne({ _id:id });

    res.status(200).json(aProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};


// edit
exports.productEditController = async (req, res) => {
 const { productname, productId, price, quantityinStock, category } = req.body;
 const {id} = req.params
  try {
    
    const prod = await products.findOneAndUpdate({_id:id},{productname, productId, price, quantityinStock, category},{new:true})

    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json(error);
  }
};
