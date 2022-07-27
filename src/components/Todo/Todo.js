import "./Todo.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoRequest,
  fetchTodoRequest,
  removeTodoRequest,
  updateTodoRequest,
} from "../../store/todos/actions";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../services/firestore";
import { v4 as uuidv4 } from "uuid";
import { Button, Card, Switch, Skeleton, Modal, Row, Form, Input } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  SaveTwoTone,
  CloseSquareTwoTone,
} from "@ant-design/icons";

const { Meta } = Card;
const { TextArea } = Input;

const Todo = ({ todo, isLoading }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const { confirm } = Modal;

  const deleteConfirmModal = (todo) => {
    confirm({
      title: "Do you want to delete the todo?",
      icon: <ExclamationCircleOutlined />,
      maskClosable: true,
      onOk() {
        dispatch(removeTodoRequest(todo));
      },
    });
  };

  const onSaveClick = () => {
    if (form.getFieldsError().some(({ errors }) => errors.length)) {
      form.validateFields();
    } else {
      dispatch(
        updateTodoRequest({
          ...form.getFieldsValue(),
          id: todo.id,
          date: Date(),
        })
      );
      setIsEditing(false);
    }
  };

  return (
    <>
      <div className="todo-wrapper">
        {isEditing ? (
          <Form name="basic" form={form} autoComplete="off">
            <div className="todo-card" loading={isLoading}>
              <DeleteOutlined
                className="todo-card-delete-icon edit"
                onClick={() => deleteConfirmModal(todo)}
              />
              <CloseSquareTwoTone
                className="todo-card-cancel-icon"
                onClick={() => {
                  setIsEditing(false);
                  form.resetFields();
                }}
                twoToneColor="#eb2f96"
              />
              <SaveTwoTone
                className="todo-card-save-icon"
                onClick={() => onSaveClick()}
              />
              <div className="todo-card-title">
                <Form.Item
                  label="Title"
                  name="title"
                  initialValue={todo.title}
                  rules={[
                    {
                      required: true,
                      message: "Please input your title!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item
                label="Description"
                name="description"
                initialValue={todo.description}
              >
                <TextArea
                  autoSize={{ minRows: 2, maxRows: 6 }}
                  placeholder="Description"
                />
              </Form.Item>
              <Form.Item
                name="isCompleted"
                valuePropName="checked"
                initialValue={todo.isCompleted}
              >
                <Switch
                  checkedChildren="Completed"
                  unCheckedChildren="Uncompleted"
                />
              </Form.Item>
            </div>
          </Form>
        ) : (
          <div className="todo-card" loading={isLoading}>
            <EditOutlined
              className="todo-card-edit-icon"
              onClick={() => setIsEditing(true)}
            />
            <div className="todo-card-top-wrapper">
              <h2 className="truncate">{`Title: ${todo.title}`}</h2>
              <span className="todo-card-date-text">
                {new Date(todo.date).toLocaleDateString() ?? ""}
              </span>
            </div>

            <div className="todo-card-description">{`Description: ${todo.description}`}</div>

            {todo.isCompleted ? (
              <CheckCircleTwoTone
                style={{ fontSize: "24px", alignSelf: "flex-end" }}
              />
            ) : (
              <CloseCircleTwoTone
                twoToneColor="#eb2f96"
                style={{ fontSize: "24px", alignSelf: "flex-end" }}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;
