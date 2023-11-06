/**
 * @description 睡眠函数
 * @param timer 需要睡眠多久 默认1000ms
 * @returns Promise<number>
 */
const sleep = (timer = 1000) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(timer);
    }, timer);
});

export { sleep as default };
