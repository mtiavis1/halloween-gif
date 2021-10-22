import { configureStore } from "@reduxjs/toolkit"
import indexReducer from "./changeGif"

export default configureStore ({
    reducer: {
        indexer: indexReducer,
    }
});