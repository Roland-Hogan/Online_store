import React from "react";
import "./Admin.css";
import Discount from "./Discount"
import ProductAdmin from "./ProductAdmin"

function Admin() {
  return (
    <div className="admin">
      <h1>Admin Dashboard</h1>
      
        <div className="parent">
            <section>
                <ProductAdmin />
            </section>
      
            <section>
               <Discount />
            </section>
        </div>
    </div>
  );
}

export default Admin;
