import { FeedbackSize, FeedbackType } from './feedback.enum';

export type FeedbackImage = {
  type: FeedbackType;
  size: FeedbackSize;
  fileName: string;
};

export const feedbackData: FeedbackImage[] = [
  {
    type: FeedbackType.noRecords,
    size: FeedbackSize.Small,
    fileName: 'no-records-small.png',
  },
  {
    type: FeedbackType.noRecords,
    size: FeedbackSize.Large,
    fileName: 'no-records-large.png',
  },
];
