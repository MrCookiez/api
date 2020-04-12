// export const getDefaultImg = ( category, subCategory ) => {
//     let img = '';

//     switch(category) {
//         case 'burger':
//             img = 'burger';
//             break;
//         case 'soda':
//             img = 'soda';
//             break;
//         default:
//             img = '';
//             break;
//     };

//     return img;
// };

export const getCurrentYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
};
