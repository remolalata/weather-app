export const validateObj = obj => {
    if (obj && Object.keys(obj).length) {
        return true;
    }

    return false;
}