import * as React from "react";
import { useStyle } from "./hooks";
import withContext from "./withContext";

interface BBRProps {
    w: number,
    h: number,
    scale: number,
    onClick: () => void,
}
const BreakBoxRot = (props: BBRProps) => {
    const { parentStyle, barStyle } = useStyle(props.w, props.h, props.scale)
    return (
        <>
            {
                [0, 1].map((i: number) => (
                    <div style={parentStyle(i)}>
                        <div>

                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default withContext(BreakBoxRot)