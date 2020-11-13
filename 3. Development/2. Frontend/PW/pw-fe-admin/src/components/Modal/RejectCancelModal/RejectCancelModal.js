import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import {  CloseCircleOutlined } from '@ant-design/icons'
import cls from "../ResolveModal/style.module.less"

// const { Option } = Select;

class CancelModal extends React.Component {

    onFinish = value => {
        console.log(value)
        const { lineItem, rejectCancel, nestedRowsSelected } = this.props;
        if ((nestedRowsSelected || []).length > 0 && !lineItem) {
            rejectCancel(nestedRowsSelected.map(item => ({
                orderId: item.orderId,
                itemSku: item.sku,
                note: value.note
            })))
        }
        else {
            rejectCancel([{
                orderId: lineItem.orderId,
                itemSku: lineItem.sku,
                note: value.note
            }])
        }
    }

    render() {
        const { visible, handleCancel, rejectCancelLoading } = this.props;
        return (
            <div>
                <Modal
                    title={
                        <div>
                            <CloseCircleOutlined className={cls.red} style={{ marginRight: "8px" }} />
                            Reject cancel
                        </div>
                    }
                    visible={visible}
                    onOk={() => this.myRef.click()}
                    confirmLoading={rejectCancelLoading}
                    onCancel={handleCancel}
                    destroyOnClose
                >
                    <Form onFinish={this.onFinish} layout="vertical" initialValues={{ type: "ADD", notes: "" }}>
                        <Form.Item
                            name="note"
                            label="Note"

                            // rules={[{ required: true, message: 'Please input note' }]}

                        >
                            <Input.TextArea rows={5} placeholder="Input the reason" style={{ width: "100%" }} />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" ref={input => this.myRef = input} style={{ display: "none" }}>
                            Submit
                        </Button>
                    </Form>
                </Modal>
            </div>
        );
    }
}
export default CancelModal;