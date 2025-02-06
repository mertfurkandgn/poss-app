
export default function CreateBill(props) {
  return (
    <>
      <Modal
        title="Basic Modal"
        open={props.isModalOpen}
        onCancel={props.closeModal}
        footer={false}
      ></Modal>
    </>
  );
}
