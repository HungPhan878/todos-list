import { createStore } from "./code.js";
import reducer from "./reducer.js";
import logger from "./logger.js";

const { attach, connect, dispatch } = createStore(logger(reducer));

window.dispatch = dispatch;

export { attach, connect };
