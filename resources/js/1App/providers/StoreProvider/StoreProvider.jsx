import { Provider } from "react-redux";
import { createReduxStore } from "./store";
export const StoreProvider = (props) => {
    const { children, asyncReducers } = props;
    const store = createReduxStore({ asyncReducers });
    return <Provider store={store}>{children}</Provider>;
};
