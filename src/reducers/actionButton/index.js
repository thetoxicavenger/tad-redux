
import { CLICKED_BUTTON } from '../../actions/clickedOnButton'

const initState = {
    trueOrFalse: false,    
}

function actionButton (state = initState, action) {
    switch (action.type) {
        case CLICKED_BUTTON:
            return {
                ...state,
                trueOrFalse: !state.trueOrFalse
            }
        default:
            return state
    }
}

export default actionButton