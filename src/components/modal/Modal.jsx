import { Modal } from 'antd'
const AppModal = ({ children, isModalOpen, setIsModalOpen, handleCancel }) => {
  const handleOk = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        onOk={handleOk}
        // closeIcon={<CloseCircleFilled className='text-white'/>}
        closable={true}
        centered={true}
        maskClosable={true}
        footer={null}
      >
        {children}
      </Modal>
    </>
  )
}
export default AppModal
