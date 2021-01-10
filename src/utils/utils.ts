import { useCallback, useEffect, useRef, useState } from "react"

// 防抖
export const useDebounce = function(fn: Function, delay: number) {
    const { current } = useRef<{
        fn: Function,
        time: NodeJS.Timeout | null
    }>({ fn, time : null });
    useEffect(() => {
        current.fn = fn;
    }, [fn, current, delay]);
    return useCallback(function f(...args) {
        current.time && clearTimeout(current.time);
        current.time = setTimeout(() => {
            current.fn(...args)
        }, delay)
    }, [current, delay]);
};

// 节流
export const useThrootle = function(fn: Function, delay: number) {
    const { current } = useRef<{
        fn: Function,
        time: NodeJS.Timeout | null
    }>({ fn, time: null });

    useEffect(() => {
        current.fn = fn;
    }, [fn, current]);

    return useCallback(function f(...args) {
        if (!current.time) {
            current.time = setTimeout(() => {
               current.time && clearTimeout(current.time);
               current.time = null;
            }, delay);
            current.fn(...args);
          }
    }, [current, delay])
}

// 监听窗口改变
export const useWindowSize = () => {
    const [getSize, setSize] = useState<{x: number, y: number}>({x: 0, y: 0});

    useEffect(() => {
        console.log(111);
        window.addEventListener("resize",  resize);
        return () => window.removeEventListener("resize", resize)
    } ,[]);

    const resize = useThrootle(function() {
        setSize({
            x: document.documentElement.clientWidth,
            y: document.documentElement.clientHeight
        })
    },500) 

    return getSize;
}