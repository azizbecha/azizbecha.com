function haveCommonElements(array1: string[], array2: string[]) {
    return array1.some(item => array2.includes(item));
}

export default haveCommonElements