"use client";

import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import styles from './SearchForm.module.css'


const SearchForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: "600px", margin: "0 0" }}
      requiredMark={false}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            label="Search Name"
            name="searchName"
            rules={[{ required: true, message: "Please input a name!" }]}
            className={styles.formItem}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true, message: "Please input a type!" }]}
            className={styles.formItem}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8} style={{ display: "flex", alignItems: "end" }}>
          <Form.Item 
          className={styles.formItem}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Search
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <a href="#" className={styles.detailedSearch}>Description Search</a>
    </Form>
  );
};

export default SearchForm;
