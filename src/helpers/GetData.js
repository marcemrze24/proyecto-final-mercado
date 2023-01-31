import MOCK_DATA from "../data/MOCK_DATA.json";

export const GetData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA);
        }, 500);
    });
};
export const GetDataById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = MOCK_DATA.find((el) => el.id === id);
            resolve(item);
        }, 500);
    });
};
