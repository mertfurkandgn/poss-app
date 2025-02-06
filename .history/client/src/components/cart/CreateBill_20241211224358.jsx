import { Button, Card, Form, Input, Modal, Select } from "antd";

export default function CreateBill(actions) {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={actions.showModal}
        onCancel={actions.closeModal}
        footer={false}
      ></Modal>
    </>
  );
}
