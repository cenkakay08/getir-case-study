import { notification } from "antd";
import * as TodoActions from "../store/todos/types";

export const openNotificationWithIcon = (type) => {
  switch (type) {
    case TodoActions.ADD_TODO_SUCCESS:
      callNotification("success", "Adding Todo", "Todo added successfully");
      break;
    case TodoActions.ADD_TODO_FAILURE:
      callNotification("error", "Adding Todo", "Failed to add Todo!!");
      break;
    case TodoActions.UPDATE_TODO_SUCCESS:
      callNotification("success", "Updating Todo", "Todo updated successfully");
      break;
    case TodoActions.UPDATE_TODO_FAILURE:
      callNotification("error", "Updating Todo", "Failed to update Todo!!");
      break;
    case TodoActions.REMOVE_TODO_SUCCESS:
      callNotification("success", "Removing Todo", "Todo removed successfully");
      break;
    case TodoActions.REMOVE_TODO_FAILURE:
      callNotification("error", "Removing Todo", "Failed to remove Todo!!");
      break;

    default:
      break;
  }
};

const callNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};
