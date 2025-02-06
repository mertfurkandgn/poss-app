import { Modal } from "antd";

export default function CreateBill(props) {
  return (
    <>
      <Modal
        title="Basic Modal"
        open={props.showModal}
        onCancel={props.closeModal}
        footer={false}
      ></Modal>
    </>
  );
}
