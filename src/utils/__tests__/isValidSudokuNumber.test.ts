import { isValidSudokuNumber } from '../isValidSudokuNumber';

describe('isValidSudokuNumber', () => {
  it('returns true for valid sudoku numbers', () => {
    expect(isValidSudokuNumber(1)).toBe(true);
    expect(isValidSudokuNumber(5)).toBe(true);
    expect(isValidSudokuNumber(9)).toBe(true);
  });

  it('returns false for invalid sudoku numbers', () => {
    expect(isValidSudokuNumber(0)).toBe(false);
    expect(isValidSudokuNumber(10)).toBe(false);
    expect(isValidSudokuNumber(-5)).toBe(false);
    expect(isValidSudokuNumber(5.5)).toBe(false);
  });
});