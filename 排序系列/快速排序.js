function quicksort(arr) {
    if(arr.length < 2){
        return arr
    }else{
        let pivot = arr[0];
        let less = arr.slice(1).filter(function(value,index){
            return value <= pivot;
        })
        let greater = arr.slice(1).filter(function(value,index){
            return value > pivot;
        })

        return [...quicksort(less),pivot,...quicksort(greater)];
    }
}

let arr = [34,43,45,76,1,54,32,22,56,11,123,5433,65,76,87,54,3];
console.log(quicksort(arr));