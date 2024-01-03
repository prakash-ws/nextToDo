"use client";
import React, { useEffect } from "react";

import { Col, Input, Row, Space, Form, Button } from "antd";
import { SubmitButton } from "./common/submit-button";
import { useActions } from "@/store/hooks/useActions";
import { useAppSelector } from "@/store/hooks/hooks";

export const formData: IForm[] = [];

export interface IForm {
  name: string;
  price: string;
  discription: string;
}

const AddForm = () => {
  const initialValues = useAppSelector((state) => state.tableData.formData);
  const { addData, toggleFormModal } = useActions();
  function handleFormSubmit(value: any) {
    console.log({ ...initialValues, ...value });

    addData({ ...initialValues, ...value });
    toggleFormModal();
  }

  return (
    <>
      <Form
        onFinish={handleFormSubmit}
        initialValues={initialValues}
        layout="vertical">
        <Col lg={{ span: 24 }} sm={{ span: 24 }}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "This field is required" }]}>
            <Input size="large" placeholder="Enter name" />
          </Form.Item>
        </Col>
        <Col lg={{ span: 24 }} sm={{ span: 24 }}>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "This field is required" }]}>
            <Input type="number" size="large" placeholder="Enter price" />
          </Form.Item>
        </Col>
        <Col lg={{ span: 24 }} sm={{ span: 24 }}>
          <Form.Item
            name="discription"
            label="Discription"
            rules={[{ required: true, message: "This field is required" }]}>
            <Input.TextArea placeholder="Enter discription" />
          </Form.Item>
        </Col>

        <Row justify="end" className="mt--32">
          <Space>
            <Button htmlType="reset">Reset</Button>
            <Button htmlType="submit">Submit</Button>
          </Space>
        </Row>
      </Form>
    </>
  );
};

export default AddForm;
