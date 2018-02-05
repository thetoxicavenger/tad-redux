import { connect } from 'react-redux'
import clickedOnButton from '../../actions/clickedOnButton'
import TrueOrFalseButton from '../../components/TrueOrFalseButton'

const mapStateToProps = (state, ownProps) => {
    return {
      trueOrFalse: state.actionButton.trueOrFalse
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      _onClick: () => {
        dispatch(clickedOnButton())
      }
    }
  }

  const TrueOrFalseButtonContainer = connect(mapStateToProps, mapDispatchToProps)(TrueOrFalseButton)

  export default TrueOrFalseButtonContainer