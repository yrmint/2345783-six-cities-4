import { SlicesName } from '../../const/const';
import { State } from '../../types/state';

export const getCommentDataSendingStatus = (state: Pick<State, SlicesName.UserReview>): boolean => state[SlicesName.UserReview].isCommentDataSending;
