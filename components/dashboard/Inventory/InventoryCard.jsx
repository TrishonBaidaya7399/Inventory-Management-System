"use client";
import PrimaryButton from "@/components/global/Buttons/PrimaryButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function InventoryCard({
  title,
  subTitle,
  href,
  buttonTitle,
  image,
  onClick,
  enabled = true,
  className,
  ...rest
}) {
  return (
    <div
      {...rest}
      className={`card_container backdrop-blur-md rounded-lg bg-blue-200/30 shadow-xl flex flex-col p-6 items-center justify-between gap-4 ${className}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="title text-3xl text-slate-900 font-bold">{title}</div>
        <Image width={200} height={200} src={image} alt={title} style={{height:"200px", width:"100%", objectFit:"contain"}}/>
        <div className="subTitle text-lg text-gray-500 font-semibold text-center">
          {subTitle}
        </div>
      </div>
      {enabled ? (
        <Link href={href}>
          <PrimaryButton
            title={buttonTitle}
            className="px-4 py-2 text-white text-semibold text-xl"
            onClick={onClick}
          />
        </Link>
      ) : (
        <PrimaryButton
          title="Enable"
          className="px-4 py-2 text-white text-semibold text-xl"
          onClick={onClick}
        />
      )}
    </div>
  );
}

export default InventoryCard;
