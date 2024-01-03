"use client";
import React, { useEffect } from "react";
import { Button, Switch, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ITableData } from "@/types/types";
import { useAppSelector } from "@/store/hooks/hooks";
import { useActions } from "@/store/hooks/useActions";

const ProductTable: React.FC = () => {
  const { toggleDisableData, setFormValues, toggleFormModal, removeData } =
    useActions();
  const columns: ColumnsType<ITableData> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: any) => <a>{name}</a>,
      width:200
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: any) => <a>{price}</a>,
      width:200
    },
    {
      title: "Discription",
      dataIndex: "discription",
      key: "discription",
      render: (discription: any) => <a>{discription}</a>,
      width:200
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "x",
      render: (_, record) => (
        <div className="flex gap-4 items-center">
          <Button
            disabled={record.disabled}
            type="link"
            onClick={() => {
              setFormValues(record);
              toggleFormModal();
            }}>
            Edit
          </Button>
          <Button
            disabled={record.disabled}
            type="primary"
            danger
            onClick={() => removeData(record.id)}>
            Delete
          </Button>
          <Switch
            checked={record.disabled}
            onChange={(data) => toggleDisableData(record.id)}
            style={{ background: record.disabled ? 'gray' : 'green' }}
          />
        </div>
      ),
      width:200
    },
  ];
  const data = useAppSelector((state) => state.tableData.tableData);

  useEffect(() => {
    if (data.length) {
      localStorage.setItem("fahm-data", JSON.stringify({ data }));
    }
  }, [data]);
  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={data}
      pagination={false}
    />
  );
};

export default ProductTable;
