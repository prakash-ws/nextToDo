import Image from "next/image";
import { Inter } from "next/font/google";
import ProductTable from "@/component/ProductTable";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import AddForm from "@/component/AddForm";
import { useAppSelector } from "@/store/hooks/hooks";
import { useActions } from "@/store/hooks/useActions";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const open = useAppSelector((state) => state.uiState.formModal);
  const { toggleFormModal, setData } = useActions();

  useEffect(() => {
    const data = localStorage.getItem("fahm-data");
    if (data && data !== undefined) {
      setData(JSON.parse(data).data);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Crud in Next.js with Redux</title>
      </Head>
      <main className="flex w-full flex-col   items-center gap-4 text-center p-1">
        <h2 className="text-2xl font-semibold text-purple-800 mb-2 mt-1 underline underline-offset-2  ">
          Crud in Next js
        </h2>

        <div className=" w-[90%] h-auto items-center flex flex-col   gap-5 ">
          <div className="flex w-full flex-row justify-between mb-3 mt-4 item-center">
            <h2 className="text-xl font-semibold text-blue-800 text-center flex justify-center items-center ">
              Your Product Table{" "}
            </h2>
            <button className="button" onClick={() => toggleFormModal()}>
              Add Product
            </button>
          </div>
          <div className="w-full">
            <ProductTable />
          </div>
        </div>
      </main>

      {open && (
        <Modal
          title="Add Product"
          open={open}
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
          onCancel={() => toggleFormModal()}>
          <AddForm />
        </Modal>
      )}
    </>
  );
}
