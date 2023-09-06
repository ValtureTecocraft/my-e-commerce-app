import { createContext, useReducer, useContext } from "react";
import { AuthContext } from "./AuthContext";

// Define the combined context
export const AuthContext = createContext(null);

export const CombinedChatContextProvider = ({ children }) => {
  // Use the useContext hook inside the component to access AuthContext
  const currentUser = useContext(AuthContext);

  // Initial state for chat and group
  const initialState = {
    user: {},
    isLoading: true,
  };

  // Reducer for chat and group chat state
  const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        // Add logic here to change the user
        let newChatId = "null";

        if (action.payload) {
          newChatId =
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid;
        }

        return {
          ...state,
          user: action.payload,
          chatId: newChatId,
          isSelected: action.select,
        };
      case "CHANGE_GROUP":
        return {
          ...state,
          selectedGroup: action.payloadGroup,
          isSelected: action.select,
        };
      case "RESET_USER_CHAT_STATE":
        // Reset user chat state
        return {
          ...state,
          chatId: "null",
          user: {},
          isSelected: "null",
        };
      case "RESET_GROUP_CHAT_STATE":
        // Reset group chat state
        return {
          ...state,
          selectedGroup: {},
        };
      case "TOGGLE_SIDEBAR":
        return {
          ...state,
          toggleSidebar: action.payload,
        };
      default:
        return state;
    }
  };

  // Use the useReducer hook to manage both chat and group chat state with the reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // Provide both chat and group chat state and dispatch functions through the context
    <AuthContext.Provider value={{ data: state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
