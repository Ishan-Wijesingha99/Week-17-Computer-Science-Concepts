const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
    array.forEach((entree, i) => {
        if(i === element) {
            return i
        }
    });

    return -1
};
