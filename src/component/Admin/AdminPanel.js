import React from "react";
import { StyledAdminMain, StyledPanelMerch, StyledPanelOrders } from "./AdminPanelStyles";

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
        <StyledAdminMain>
            <StyledPanelMerch>
                <h3>
                    EDIT PRODUCTS
                </h3>
                <hr/>
                <div>Click here to add new merchandise</div>
                <hr/>
                {productList}
            </StyledPanelMerch>
            <StyledPanelOrders>
                <h3>
                    Orders
                </h3>
                Check Orders Here
            </StyledPanelOrders>
        </StyledAdminMain>
    )
}

export default AdminPanel;