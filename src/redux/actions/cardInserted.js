export const CARD_INSERTED = 'CARD_INSERTED';

export const cardInserted = inserted => {
	return dispatch => {
		dispatch({ type: CARD_INSERTED, payload: inserted });
	};
};
