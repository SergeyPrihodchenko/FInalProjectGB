import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
export { store } from "./store";
export const StoreProvider = (props) => {
    const { children } = props;

    return <Provider store={store}>{children}</Provider>;
};
