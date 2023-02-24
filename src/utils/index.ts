/**
 * 生成随机id
 * @returns {string} 随机id
 */
const generateId = () => Math.random().toString(16).slice(2)

export { generateId }
