
import * as React from "react";
import { useAnimatedScale, useDimension } from "./hooks";

const withContext = (MainFC: React.FC<any>): React.FC<any> => {
    const NewFC = (props: any) => {
        const { w, h } = useDimension()
        const { scale, start: onClick } = useAnimatedScale()

        const newProps = { ...props, w, h, scale, onClick }
        return (
            <MainFC {...newProps}>

            </MainFC>
        )
    }
    return NewFC as React.FC<any>
}

export default withContext