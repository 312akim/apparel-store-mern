import React from "react";
import { PanelMerch, PanelOrders } from "./AdminPanelStyles";

const AdminPanel = () => {

    return (
        <div>
            <PanelMerch>
                Edit Merchandise Here
            </PanelMerch>
            <PanelOrders>
                Check Orders Here
            </PanelOrders>
        </div>
    )
}

export default AdminPanel;