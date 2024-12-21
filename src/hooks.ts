import { useState, useEffect, CSSProperties } from 'react'

export const useAnimatedScale = (scGap: number = 0.02, delay: number = 20) => {
    const [animated, setAnimated] = useState(false)
    const [scale, setScale] = useState(0)
    return {
        scale,
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev: number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0
                        }
                        return prev + scGap
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        const resizeListener = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        window.addEventListener('resize', resizeListener, false)
    }, [])
    return {
        w,
        h,
    }
}

interface BBRProps {
    parentStyle(i: number): CSSProperties,
    barStyle(): CSSProperties,
}

export const useStyle = (w: number, h: number, scale: number): BBRProps => {
    const position = 'absolute'
    const background = 'indigo'
    const size = Math.min(w, h) / 10
    const sf = Math.sin(Math.PI * scale)
    return {
        parentStyle(i: number): CSSProperties {
            return {
                position,
                left: `${w / 2}px`,
                top: `${h / 2}px`,
                transform: `rotate(${90 * (1 - 2 * i) * sf}deg)`
            }
        },
        barStyle(): CSSProperties {
            return {
                position,
                left: `0px`,
                top: `${-size / 3}px`,
                width: `${size}px`,
                height: `${(2 * size) / 3}px`,
                background,
            }
        }
    }
}