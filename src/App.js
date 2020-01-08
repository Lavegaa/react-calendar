import React from "react";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "store/rootReducer";
import Calendar from "./components/Calendar";
import TodoList from "./components/TodoList";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

function App() {
  return (
    <Provider store={store}>
      <Calendar></Calendar>
      <TodoList></TodoList>
    </Provider>
  );
}

export default App;
