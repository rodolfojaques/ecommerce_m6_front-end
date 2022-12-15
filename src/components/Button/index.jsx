import { StyleButton } from "./style";

function Button ({children, ...rest}){
    return <StyleButton {...rest}>{children}</StyleButton>;
};

export { Button };