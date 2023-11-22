export const isValidSudokuNumber = (value: number): boolean => {
    return Number.isInteger(value) && value > 0 && value < 10
}
