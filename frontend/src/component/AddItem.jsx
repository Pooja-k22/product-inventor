import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addItemApi } from "../services/allApi";

function AddItem({setaddStatus}) {
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

  //   add item
  const handlesubmit = async () => {
    const { productname, productId, price, quantityinStock, category } =
      productD;
    if (!productname || !productId || !price || !quantityinStock || !category) {
      alert("please fill all");
    } else {
      const result = await addItemApi(productD);

      //console.log(result);
      if (result.status == 200) {
        alert("added successfully");
        setProductD({
          productname: "",
          productId: "",
          price: "",
          quantityinStock: "",
          category: "",
        });
        handleClose()
        setaddStatus(result.data)
        
      }
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ADD PRODUCT
      </Button>

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
          <Button variant="primary" onClick={handlesubmit}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItem;
