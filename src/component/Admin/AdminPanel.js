import React from "react";
import { AdminMain, PanelMerch, PanelOrders } from "./AdminPanelStyles";

const AdminPanel = ({products}) => {

    const productList = products.map(item =>{
        return (
            <div>
                <div>
                    Product: {item.name}
                </div>
                <div>
                    Stock: {item.inventory}
                </div>
                <div>EDIT HERE</div>
                <hr/>
            </div>
        )
    });

    return (
        <AdminMain>
            <PanelMerch>
                <h3>
                    EDIT PRODUCTS
                </h3>
                {productList}
            </PanelMerch>
            <PanelOrders>
                <h3>
                    Orders
                </h3>
                Check Orders Here
            </PanelOrders>
        </AdminMain>
    )
}

export default AdminPanel;