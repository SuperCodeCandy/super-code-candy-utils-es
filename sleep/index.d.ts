/**
 * @description 睡眠函数
 * @param timer 需要睡眠多久 默认1000ms
 * @returns Promise<number>
 */
declare const sleep: (timer?: number) => Promise<number>;

export { sleep as default };
