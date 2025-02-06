import { Table, Card, Button, Modal } from "antd";
import Header from "../components/header/Header";
import { useState } from "react";
import CreateBill from "../components/cart/CreateBill";
export default function CartPage() {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  //MODAL CODE HERE START
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="px-6">
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="flex justify-end">
          <Card className="w-72 mt-4">
            <div className="flex justify-between ">
              <span>Ara Toplam</span>
              <span>$875</span>
            </div>
            <div className="flex justify-between ">
              <span>KDV Toplam</span>
              <span className="text-red-600">$15</span>
            </div>
            <div className="flex justify-between">
              <b>Toplam</b>
              <b>$978</b>
            </div>
            <Button className="mt-4 w-full" type="primary" size="large">
              Sipariş Oluştur
            </Button>
          </Card>

          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <CreateBill />
        </div>
      </div>
    </>
  );
}
