// const MyComponent = () => {
//     return (
//         <>
//             <h1>Hello</h1>
//             <p>World</p>
//         </>
//     );
// };  // either this or

import { Fragment } from "react";
const MyComponent = () => {
    return (
        <Fragment>
            <h1>Hello</h1>
            <p>World</p>
        </Fragment>
    );
};