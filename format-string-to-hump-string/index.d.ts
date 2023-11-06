/**
 *@description 将string转为驼峰的格式 zh-cn -> zhCn | zh-cn-cn -> zhCnCN
 * @param str 需要转换的字符
 * @param flag 字符标识符 默认值为 '-'
 * @returns 转化后的数据
 */
declare const formatStringToHumpString: (str?: string, flag?: string) => string;

export { formatStringToHumpString as default };
