import { binarySearch } from './src/binarySearch.js'
import { linearSearch } from './src/linearSearch.js'
import { setupList } from './src/setupList.js'

const main = () => {
    const size = process.argv[2]
    const pattern = /^\d+$/
    if (
        size &&
        (!pattern.test(size) || parseInt(size) > 500000 || parseInt(size) <= 0)
    ) {
        console.log(
            '=== Please provide a valid positive list size between 1 and 500,000.'
        )
        return
    }
    const [indexToFind, list] = setupList(size)
    binarySearch(list, indexToFind, 0)
    linearSearch(list, indexToFind)
}

main()
