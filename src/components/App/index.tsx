import "antd/dist/reset.css";
import { FC } from "react";
import TodoList from "../TodoList";

const App: FC = () => {
    return (
        <div className="app">
            <TodoList />
        </div>
    );
};

export default App;
