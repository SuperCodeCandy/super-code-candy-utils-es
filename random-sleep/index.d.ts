/**
 * @description 随机随眠时间
 * @param minTime 最小睡眠时间 默认值 500
 * @param maxTime 最大睡眠时间 默认值 5000
 * @returns Promise<number>
 */
declare const randomSleep: (minTime?: number, maxTime?: number) => Promise<number>;

export { randomSleep as default };
