// Learning QuickSort. This code represents what I've gone through so far / my guesses of what is to come next

function partitionArray (unsortedArray) {

    if (unsortedArray instanceof Array != true || unsortedArray.length <= 1) {
        return unsortedArray;
    } else {

        var pivot = unsortedArray[0],
            i, j, storeElement;

        for (i = j = 1; j < unsortedArray.length; j++){

            if (unsortedArray[j] < pivot) {
                // var start = unsortedArray.slice(0, i+1),
                //     middle = unsortedArray.slice(j, j+1),
                //     end = unsortedArray.slice(i+1, j).concat(unsortedArray.slice(j+1, unsortedArray.length));
                // unsortedArray = start.concat(middle.concat(end));
                storeElement = unsortedArray[i];
                unsortedArray[i] = unsortedArray[j];
                unsortedArray[j] = storeElement;
                i++;
            }
            console.log(i, j, unsortedArray);
        }

        storeElement = unsortedArray[i-1];
        unsortedArray[i-1] = unsortedArray[0];
        // unsortedArray[i] = pivot;
        unsortedArray[0] = storeElement;

        console.log(i, j, unsortedArray, 'done');
        return unsortedArray;
    }

}

var testArray = ([3,8,2,5,1,4,7,6]);
partitionArray(testArray);
