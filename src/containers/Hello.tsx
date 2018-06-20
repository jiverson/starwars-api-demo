import Hello from '../components/Hello'
import * as actions from '../actions'
import {AppState} from '../models'
import {connect, Dispatch} from 'react-redux'

export function mapStateToProps(state: AppState) {
  return {
    enthusiasmLevel: state.enthusiasm.level,
    name: state.enthusiasm.languageName
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
