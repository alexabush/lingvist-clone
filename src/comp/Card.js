import R from 'react'
import T from 'prop-types'

export default class SFCard extends R.PureComponent {
  static propTypes = {
    children: T.any,
  }

  render() {
    return (
      <div>This is a card</div>
    )
  }
}
