import { mount } from '@vue/test-utils'
import GameBoard from '../GameBoard.vue'

describe('GameBoard', () => {
  it('displays the title "Game Board :)"', () => {
    const wrapper = mount(GameBoard)
    expect(wrapper.find('h1').text()).toBe('Sudoku :)')
  })
})
