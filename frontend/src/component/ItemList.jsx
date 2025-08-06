import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import { deleteItemApi, getItemApi } from "../services/allApi";
import Table from "react-bootstrap/Table";
import EditItem from "./EditItem";

function ItemList() {
  const [addStatus, setaddStatus] = useState({});
  const [delStatus, setdelStatus] = useState({});
  const [editStatus, seteditStatus] = useState({});

  const [prodD, setprodD] = useState([]);
  const [temD, settemD] = useState([]);

  const [searchkey, setsearchkey] = useState("");
  console.log(searchkey);
  

  // get prod

  const getAllProd = async () => {
    const result = await getItemApi();

    console.log(result);

    if (result.status == 200) {
      setprodD(result.data);
      settemD(result.data);
    }
  };

  //   delete

  const handleDelete = async (id) => {
    const result = await deleteItemApi(id);
    console.log(result);
    if (result.status == 200) {
      alert("delete successfully");
      setdelStatus(result.data);
    }
  };

  //   filter

  const filter = (data) => {
    if (data != "nofilter") {
      setprodD(temD.filter((item) => item.category === data));
    } else {
      setprodD(temD);
    }
  };

  useEffect(() => {
    getAllProd();
  }, [addStatus, delStatus, editStatus]);
  return (
    <>
      <div className="">
        <div className="head p-3">
            <h5 className="">PRODUCT INVENTORY MANAGER</h5>
        </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <AddItem setaddStatus={setaddStatus} />{" "}
            <div className="mt-4">
              <input
                type="text"
                placeholder="search "
                className="rounded p-2"
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
          </div>
    
          <div className="container m-5 ">
            <div className="row ">
              <div className="col-2">
                <h5>FILTER</h5>
                <div>
                  <input
                    type="radio"
                    id="furniture"
                    name="category"
                    value={"furniture"}
                    onClick={() => filter("furniture")}
                  />
                  <label htmlFor="category"> furniture</label>
                </div>
    
                <div>
                  <input
                    type="radio"
                    name="category"
                    id="cloth"
                    value={"cloth"}
                    onClick={() => filter("cloth")}
                  />
                  <label htmlFor="category"> cloth</label>
                </div>
    
                <div>
                  <input
                    type="radio"
                    name="category"
                    id="craft"
                    value={"craft"}
                    onClick={() => filter("craft")}
                  />
                  <label htmlFor="category"> craft</label>
                </div>
    
                <div>
                  <input
                    type="radio"
                    name="category"
                    id=""
                    value={"nofilter"}
                    onClick={() => filter("nofilter")}
                  />
                  <label htmlFor="category"> no filter</label>
                </div>
              </div>
              <div className="col-8">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th> #</th>
                      <th> id</th>
                      <th>Product Name</th>
                      <th> Price</th>
                      <th> Quantity</th>
                      <th>Category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prodD?.length > 0 ? (
                      prodD.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.productId}</td>
                          <td>{item.productname}</td>
                          <td>{item.price}</td>
                          <td>{item.quantityinStock}</td>
                          <td>{item.category}</td>
                          <td className="d-flex justify-content-between ">
                            {" "}
                            <button
                              className="btn btn-info"
                              onClick={() => handleDelete(item?._id)}
                            >
                              Delete
                            </button>
                            <button className="">
                              <EditItem
                                id={item?._id}
                                seteditStatus={seteditStatus}
                              />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>no items</p>
                    )}
                  </tbody>
                </Table>
              </div>
    
              <div className="col-2"></div>
            </div>
          </div>
      </div>
    </>
  );
}

export default ItemList;
