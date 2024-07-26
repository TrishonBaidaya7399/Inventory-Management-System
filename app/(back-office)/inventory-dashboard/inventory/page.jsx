"use client";
import InventoryCard from "@/components/dashboard/Inventory/InventoryCard";
import InventoryHeader from "@/components/dashboard/Inventory/InventoryHeader";
import { message } from "antd";
import React from "react";

function Inventory() {
  const handleItemsGroup = () => {
    message.info("Item Groups");
  };

  const handleNewItem = () => {
    message.info("New Item");
  };

  const handleCategory = () => {
    message.info("Composite Items");
  };

  const handleBrand = () => {
    message.info("Price List");
  };
  const handleWarehouse = () => {
    message.info("Warehouse");
  };
  const handleUnit = () => {
    message.info("Units");
  };

  return (
    <div>
      <div className="sticky header_part">
        <InventoryHeader newHref={"/inventory-dashboard/inventory/items/new"} />
      </div>
      <div className="card_section grid sm:grid-cols-1 md:grid-cols-2 gap-6 p-12 mb-12">
        {/* <InventoryCard
          title="Item Groups"
          image="/images/dashboard/inventory/item_groups.png"
          subTitle="Create multiple variants of the same item using this group"
          href="/inventory-dashboard/inventory/items/new"
          buttonTitle="New Item Group"
          onClick={handleItemsGroup}
        /> */}
        <InventoryCard
          title="Items"
          image="/images/dashboard/inventory/item.png"
          subTitle="Create standalone items and services that you buy and sell"
          href="/inventory-dashboard/inventory/items/new"
          buttonTitle="New Item"
          // onClick={handleNewItem}
        />
        <InventoryCard
          title="Categories"
          image="/images/dashboard/inventory/composite_items.png"
          subTitle="Bundle different items together and sell them as kit"
          href="/inventory-dashboard/inventory/categories/new"
          buttonTitle="New Category"
          // onClick={handleCategory}
        />
        <InventoryCard
          title="Brands"
          image="/images/dashboard/inventory/brands_logo.png"
          subTitle="Tweak your item prices for specific contacts of transactions"
          href="/inventory-dashboard/inventory/brands/new"
          buttonTitle="New Brand"
          // onClick={handleBrand}
        />
        <InventoryCard
          title="Warehouse"
          image="/images/dashboard/inventory/warehouse_logo.png"
          subTitle="Tweak your item prices for specific contacts of transactions"
          href="/inventory-dashboard/inventory/warehouse/new"
          buttonTitle="New Warehouse"
          // onClick={handleWarehouse}
        />
        <InventoryCard
          title="Units"
          image="/images/dashboard/inventory/price_list.png"
          subTitle="Tweak your item prices for specific contacts of transactions"
          href="/inventory-dashboard/inventory/units/new"
          buttonTitle="New Unit"
          // onClick={handleUnit}
        />
      </div>
    </div>
  );
}

export default Inventory;
