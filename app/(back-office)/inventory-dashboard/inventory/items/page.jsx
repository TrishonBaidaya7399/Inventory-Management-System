"use client"
import InventoryCard from "@/components/dashboard/Inventory/InventoryCard";
import InventoryHeader from "@/components/dashboard/Inventory/InventoryHeader";
import { message } from "antd";
import React from "react";

function Items() {
  const handleItemsGroup = () => {
    message.info("Item Groups");
  };

  const handleNewItem = () => {
    message.info("New Item");
  };

  const handleCompositeItems = () => {
    message.info("Composite Items");
  };

  const handlePriceList = () => {
    message.info("Price List");
  };

  return (
    <div>
      <div className="sticky header_part">
        <InventoryHeader newHref={"/inventory-dashboard/inventory/items/new"}/>
      </div>
      <div className="card_section grid sm:grid-cols-1 md:grid-cols-2 gap-6 p-12 mb-12">
        <InventoryCard
          title="Item Groups"
          image="/images/dashboard/inventory/item_groups.png"
          subTitle="Create multiple variants of the same item using this group"
          href="#"
          buttonTitle="New Item Group"
          onClick={handleItemsGroup}
        />
        <InventoryCard
          title="Items"
          image="/images/dashboard/inventory/item.png"
          subTitle="Create standalone items and services that you buy and sell"
          href="#"
          buttonTitle="New Item"
          onClick={handleNewItem}
        />
        <InventoryCard
          title="Composite Items"
          image="/images/dashboard/inventory/composite_items.png"
          subTitle="Bundle different items together and sell them as kit"
          href="#"
          buttonTitle="New Composite Item"
          onClick={handleCompositeItems}
        />
        <InventoryCard
          title="Price List"
          image="/images/dashboard/inventory/price_list.png"
          subTitle="Tweak your item prices for specific contacts of transactions"
          href="#"
          buttonTitle="Enable Now"
          onClick={handlePriceList}
        />
      </div>
    </div>
  );
}

export default Items;
