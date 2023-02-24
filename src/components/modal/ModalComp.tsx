import { Modal } from "antd";
import React, { useEffect } from "react";
import { IconClose } from "../icons";

interface IModalComp {
  modalOpen: boolean;
  setModalOpen: any;
  title: string;
  children: React.ReactNode;
  textCacel?: string;
  textOk?: string;
  className?: string;
}

const ModalComp = ({
  setModalOpen,
  modalOpen,
  title,
  children,
  textCacel,
  textOk,
  className = "",
}: IModalComp) => {
  return (
    <>
      <Modal
        destroyOnClose={true}
        maskClosable={false}
        closeIcon={<IconClose />}
        title={title}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        okText={textOk}
        cancelText={textCacel}
        className={className}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalComp;
