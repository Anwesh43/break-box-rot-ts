import { useState, useEffect } from 'react'

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