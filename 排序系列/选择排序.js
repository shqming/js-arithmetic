// 找出数组中最小的数
function findSmallest(arr) {
    let smallest = arr[0];
    let smallest_index = 0;
    for(let i = 1; i < arr.length; i++){
        if( arr[i] < smallest){
            smallest = arr[i];
            smallest_index = i;
        }
    }

    return smallest_index;
}

//选择排序
function selectionSort(arr) {
    let newArr = []
    let arrlength = arr.length
    //注意这里循环结束条件不能直接用arr.length，因为splice会改变数组大小
    //造成循环一半不循环的现象
    for(let i = 0; i < arrlength; i++){     
        // 调用findSmallest找出数组中最小的数
        let smallest_index = findSmallest(arr);
        let smallest = arr[smallest_index];

        //把数字从原数组中删除，并添加到新数组中。
        arr.splice(smallest_index, 1);
        newArr.push(smallest);
    }

    return newArr;
}

let arr = [1,54,32,23,123,54,12,43,13,12,70,45,3,45,65,74]
console.log(selectionSort(arr));