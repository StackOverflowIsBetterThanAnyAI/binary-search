export const linearSearch = (arr, item) => {
    const startTime = performance.now()

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            const endTime = performance.now()
            const timeTaken = endTime - startTime
            console.log(
                `=== Found the desired number with linear search after ${
                    i + 1
                } iterations and ${timeTaken.toFixed(6)} milliseconds.`
            )
            return
        }
    }
}
