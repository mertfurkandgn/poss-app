import { Modal } from "antd";

export default function CreateBill(selam) {
  return (
    <>
      <Modal
        title="Basic Modal"
        open={selam.showModal}
        onCancel={selam.closeModal}
        footer={false}
      ></Modal>
    </>
  );
}
