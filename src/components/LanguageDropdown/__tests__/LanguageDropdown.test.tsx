import React from 'react'
import {render} from '../../../test-utils'
import {LanguageDropdown} from '../LanguageDropdown'

describe('<LanguageDropdown />', () => {
  test('should display an empty language selector with a next button', async () => {
    const {asFragment} = render(<LanguageDropdown/>)
    expect(asFragment()).toMatchSnapshot()
  })
})