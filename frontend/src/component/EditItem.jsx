import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { editProdApi, getProdApi } from "../services/allApi";

function EditItem({ id, seteditStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [productD, setProductD] = useState({
    productname: "",
    productId: "",
    price: "",
    quantityinStock: "",
    category: "",
  });

  // get data

  const getaprod = async (id) => {
    const result = await getProdApi(id);
    console.log(result);
    if (result.status == 200) {
      const Data = result.data;

      setProductD({
        productname: Data.productname,
        productId: Data.productId,
        price: Data.price,
        quantityinStock: Data.quantityinStock,
        category: Data.category,
      });
    }
  };
  console.log(productD);

  //   edit item
  const handleSubmit = async () => {
    const { productname, productId, price, quantityinStock, category } =
      productD;

    const result = await editProdApi(id, {
      productname,
      productId,
      price,
      quantityinStock,
      category,
    });
    if (result.status == 200) {
      alert("update successfully");
      handleClose();
      seteditStatus(result.data);
    }
  };

  useEffect(() => {
    getaprod(id);
  }, [id]);

  return (
    <>
      <button className="btn " onClick={handleShow}>
        edit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div>
              <input
                type="text"
                placeholder="Product name"
                className="form-control mb-4"
                value={productD.productname}
                onChange={(e) =>
                  setProductD({ ...productD, productname: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Product id"
                className="form-control mb-4"
                value={productD.productId}
                onChange={(e) =>
                  setProductD({ ...productD, productId: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="price"
                className="form-control mb-4"
                value={productD.price}
                onChange={(e) =>
                  setProductD({ ...productD, price: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="quant"
                className="form-control mb-4"
                value={productD.quantityinStock}
                onChange={(e) =>
                  setProductD({ ...productD, quantityinStock: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="category"
                className="form-control mb-4"
                value={productD.category}
                onChange={(e) =>
                  setProductD({ ...productD, category: e.target.value })
                }
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditItem;
