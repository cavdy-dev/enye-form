import React from 'react';
import { Form, DatePicker, Input, Button } from 'antd';
import Navbar from './navbar';
import Table from './table';

class RegistrationForm extends React.Component {
  state = {
    formData: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
      if (err) {
        return;
      }

      const values = {
        ...fieldsValue,
        datepicker: fieldsValue['datepicker'].format('YYYY-MM-DD')
      };

      this.setState({ formData: values });
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [
        { type: 'object', required: true, message: 'Please select date!' }
      ]
    };

    return (
      <>
        <Navbar />
        <div className="home">
          <Form onSubmit={this.handleSubmit} className="form">
            <Form.Item label={<span>First Name</span>}>
              {getFieldDecorator('firstname', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your first name!',
                    whitespace: true
                  }
                ]
              })(<Input className="form-input" />)}
            </Form.Item>
            <Form.Item label={<span>Last Name</span>}>
              {getFieldDecorator('lastname', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your last name!',
                    whitespace: true
                  }
                ]
              })(<Input className="form-input" />)}
            </Form.Item>
            <Form.Item label={<span>Birthday</span>}>
              {getFieldDecorator('datepicker', config)(
                <DatePicker className="form-input" />
              )}
            </Form.Item>
            <Form.Item label={<span>Age</span>}>
              {getFieldDecorator('age', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your age!',
                    whitespace: true
                  }
                ]
              })(<Input className="form-input" />)}
            </Form.Item>
            <Form.Item label={<span>Hobby</span>}>
              {getFieldDecorator('hobby', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your hobby!',
                    whitespace: true
                  }
                ]
              })(<Input className="form-input" />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>

          <Table formData={this.state.formData} />
        </div>
      </>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(
  RegistrationForm
);

export default WrappedRegistrationForm;
