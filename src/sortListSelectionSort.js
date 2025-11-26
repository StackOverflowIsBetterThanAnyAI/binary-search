export const sortListSelectionSort = (arr) => {
    const startTime = performance.now()

    let smallestIndex = 0
    let smallestValue = arr[0]
    for (let i = 0; i < arr.length; i++) {
        smallestIndex = i
        smallestValue = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < smallestValue) {
                smallestIndex = j
                smallestValue = arr[j]
            }
        }
        if (smallestIndex !== i) {
            arr[smallestIndex] = arr[i]
            arr[i] = smallestValue
        }
    }

    const endTime = performance.now()
    const timeTaken = (endTime - startTime) / 1000
    console.log(
        `=== List was sorted with Selection Sort in ${timeTaken.toFixed(
            6
        )} seconds.\n`
    )
    return arr
}
