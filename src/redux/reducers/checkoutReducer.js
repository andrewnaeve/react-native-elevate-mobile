import { LAUNCH_MODAL } from '../actions/modal';
import { CARD_INSERTED } from '../actions/cardInserted';

import initialState from '../initialState';
import { TRANSACTION_SUCCESS } from '../actions/transactionSuccess';

export const checkout = (state = initialState.checkout, action) => {
	switch (action.type) {
		case LAUNCH_MODAL:
			return {
				...state,
				showModal: action.payload
			};
		case CARD_INSERTED:
			return {
				...state,
				cardInserted: action.payload
			};
		case TRANSACTION_SUCCESS:
			return {
				...state,
				transactionSuccess: action.payload
			};
		default:
			return state;
	}
};
