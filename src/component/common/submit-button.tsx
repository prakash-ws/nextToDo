"use client";
import { Button, Form, FormInstance } from "antd";
import { useEffect, useState } from "react";

export const SubmitButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields().then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values]);

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      style={{ background: submittable ? "blue" : "white" }}>
      Submit
    </Button>
  );
};
