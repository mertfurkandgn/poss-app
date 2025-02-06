import { Button, Card, Form, Input, Modal, Select } from "antd";

export default function CreateBill(actions) {
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
