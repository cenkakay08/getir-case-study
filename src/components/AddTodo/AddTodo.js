import { Button, Switch, Form, Input, Typography, Space } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodoRequest } from "../../store/todos/actions";
import "./AddTodo.scss";

const { Title } = Typography;
const { TextArea } = Input;

const AddTodo = () => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const uniqueId = uuidv4();

    dispatch(addTodoRequest({ ...values, id: uniqueId, date: Date() }));

    form.resetFields();
  };

  return (
    <div className="add-todo-container">
      <Title level={2}>Add Todo</Title>
      <Form name="basic" form={form} onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Title"
          name="title"
          className="add-todo-form-title"
          style={{ gap: "25px" }}
          rules={[
            {
              required: true,
              message: "Please input your title!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description" initialValue={""}>
          <TextArea autoSize={{ minRows: 4, maxRows: 4 }} />
        </Form.Item>
        <Form.Item
          name="isCompleted"
          valuePropName="checked"
          initialValue={false}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Switch checkedChildren="Completed" unCheckedChildren="Uncompleted" />
        </Form.Item>
        <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddTodo;
