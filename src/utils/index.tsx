export const notNumber = (val) => {
    return typeof val === 'number' && Number.isNaN(val);
}