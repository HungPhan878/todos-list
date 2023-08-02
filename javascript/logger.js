export default function logger(reducer) {
    return (preState, action, argus) => {
        console.group(action);
        console.log("Previous state:", preState);
        console.log("Argument action:", argus);
        const nextState = reducer(preState, action, argus);
        console.log("Next state:", nextState);
        console.groupEnd();

        return nextState;
    };
}
