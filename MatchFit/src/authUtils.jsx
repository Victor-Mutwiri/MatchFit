export const userData = () => {
    const stringifiedUser = localStorage.getItem("user") || '""';
    return JSON.parse(stringifiedUser || {});
}