import React, {Component} from 'react';
import {Button, Col, DatePicker, Form, Input, Row, Select, Modal, Space} from "antd";
import {
    SaveOutlined,
    KeyOutlined,
    GlobalOutlined,
    FacebookOutlined,
    GiftOutlined,
    SolutionOutlined,
    MailOutlined,
    PhoneOutlined,
    UserOutlined, LockOutlined,
} from "@ant-design/icons";
import configs from "../../config/project.config";
import moment from 'moment';
import * as _ from 'lodash';
import userAvatar from '../../assets/avatar-user.png'
import cls from "./profile.module.less";

const {Option} = Select;

class Account extends Component {

    formRef = React.createRef();

    state = {
        visible: false,
    }

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    onChangePass = (values) => {
        this.props.editPassword(values);
    };

    handleData = () => {
        const {listAccount} = this.props;
        let data = {};
        listAccount
        && listAccount.settings.configs
        && listAccount.settings.configs.map(value => {
            return data[value.key] = JSON.parse(value.value.toLowerCase());
        });

        return data;
    };

    onFinish = (values) => {

        const {editUserInfo, userInfo} = this.props;
        editUserInfo({
            ...values,
            dob: values.dob.toISOString(),
            fbLink: `https://${values.fbLink}`,
            roles: userInfo.roles
        });

    };

    render() {

        const {editUserInfoLoading, userInfo, editPassLoading} = this.props;

        return (
            userInfo ? (<Row gutter={24} style={{marginTop: '25px'}}>
                <Col md={6}>
                    <div className={cls.userInfo}>
                        <img src={userAvatar}/>
                        <span>{_.get(userInfo, 'fullName')}</span>
                    </div>
                </Col>
                <Col md={15}>
                    <Form
                        ref={this.formRef}
                        layout="vertical"
                        onFinish={this.onFinish}
                        initialValues={{
                            'firstName': _.get(userInfo, 'firstName', ''),
                            'lastName': _.get(userInfo, 'lastName', ''),
                            'email': _.get(userInfo, 'email', ''),
                            'phone': _.get(userInfo, 'phone', ''),
                            'dob': moment(_.get(userInfo, 'dob', moment(Date.now()))),
                            'address': _.get(userInfo, 'address', ''),
                            // 'orderHoldingHour': _.get(userInfo, 'orderHoldingHour', 0),
                            'fbLink': _.get(userInfo, 'fbLink', '').replace("https://", ""),
                        }}
                    >
                        <Row gutter={24}>
                            <Col md={12}>
                                <Form.Item
                                    name="firstName"
                                    label={<span><UserOutlined/> First Name</span>}
                                    style={{fontWeight: '500'}}
                                >
                                    <Input placeholder="Enter first name"/>
                                </Form.Item>
                            </Col>
                            <Col md={12}>
                                <Form.Item
                                    name="lastName"
                                    label={<span><UserOutlined/> Last Name</span>}
                                    style={{fontWeight: '500'}}
                                >
                                    <Input placeholder="Enter last name"/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            name="email"
                            label={<span><MailOutlined/> Email</span>}
                            style={{fontWeight: '500'}}
                        >
                            <Input disabled/>
                        </Form.Item>
                        <Form.Item
                            label={<span><KeyOutlined/> Password</span>}
                            style={{fontWeight: '500'}}
                        >
                            <Button onClick={() => {
                                this.setState({
                                    visible: true,
                                })
                            }} type={"primary"}>Change Password</Button>
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label={<span><PhoneOutlined/> Phone number</span>}
                            style={{fontWeight: '500'}}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={<span><GiftOutlined/> Birthday</span>}
                            name="dob"
                            style={{fontWeight: '500'}}
                        >
                            <DatePicker
                                style={{width: '100%'}}
                                placeholder='Enter your birthday'
                                showToday={false}
                                format="DD/MM/YYYY"
                            />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label={<span><SolutionOutlined/> Address</span>}
                            style={{fontWeight: '500'}}
                        >
                            <Input placeholder=""/>
                        </Form.Item>
                        <Form.Item
                            name="fbLink"
                            label={<span><FacebookOutlined/> Facebook Link</span>}
                            style={{fontWeight: '500'}}
                        >
                            <Input addonBefore="https://"/>
                        </Form.Item>
                        <Form.Item
                            name="timeZone"
                            label={<span><GlobalOutlined/> Time zone</span>}
                            style={{fontWeight: '500'}}
                        >
                            <Select
                                showSearch
                                allowClear
                                placeholder="select time zone"
                            >
                                {
                                    configs.timeZone.map(data => (
                                        <Option key={data.value} value={data.value}>
                                            {data.text}
                                        </Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                        <br/>
                        <Form.Item>
                            <Row>
                                <Button
                                    icon={<SaveOutlined/>} type="primary"
                                    htmlType="submit"
                                    block
                                    loading={editUserInfoLoading}
                                >
                                    Save
                                </Button>
                            </Row>
                        </Form.Item>
                    </Form>
                    <Modal
                        title='Change Password'
                        footer={
                            <div style={{textAlign: "right"}}>
                                <Space>
                                    <Button
                                        type="primary"
                                        onClick={() => {
                                            this.btnRef.click();
                                        }}
                                        loading={editPassLoading}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        type="default"
                                        onClick={() => {
                                            this.handleCancel();
                                        }}
                                    >
                                        Close
                                    </Button>
                                </Space>
                            </div>
                        }
                        visible={this.state.visible}
                        onCancel={() => {
                            this.handleCancel();
                        }}
                        destroyOnClose
                    >
                        <Form
                            layout="vertical"
                            initialValues={{
                                currentPassword: '',
                                newPassword: ''
                            }}
                            onFinish={this.onChangePass}
                        >
                            <Form.Item
                                name="currentPassword"
                                rules={[{required: true, message: 'Please enter current password!'}]}
                                label='Current Password'
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                />
                            </Form.Item>

                            <Form.Item
                                name="newPassword"
                                rules={[{
                                    required: true, message: 'Please enter new password! (at least 5 characters)',
                                    min: 5
                                }]}
                                label='New Password'
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                />
                            </Form.Item>

                            <Button htmlType="submit" style={{display: "none"}}
                                    ref={input => this.btnRef = input}>Submit</Button>
                        </Form>
                    </Modal>
                </Col>
            </Row>) : 'Loading...'
        )
    }

}

Account.propTypes = {};

export default Account;
