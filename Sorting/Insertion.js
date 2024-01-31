
// function insertion(items) {
//     for (let i = 1; i < items.length; i++) {
//         let key = items[i];
//         let j = i - 1;

//         for (; j >= 0; j--) {
//             if (key < items[j]) {
//                 items[j + 1] = items[j];

//             } else {
//                 break;
//             }
//         }
//         items[j + 1] = key;
//     }
//     // return items;
//     console.log(items);

// }
function insertion(items) {
    for (let i = 1; i < items.length; i++) {
        let key = items[i];
        let j = i - 1;
        while (j >= 0 && items[j] > key) {
            items[j + 1] = items[j];
            j--;
        }
        items[j + 1] = key;
    }
    console.log(items);
}
insertion([5, 8, 46, 31, 92, 14]);
