import { feedbackData } from './feedback.data';
import { FeedbackSize, FeedbackType } from './feedback.enum';

export class Feedback {
  private readonly _feedbackImagesUrl = '/assets/images/feedback';
  private _type = FeedbackType.noRecords;
  private _size = FeedbackSize.Small;

  constructor(type?: FeedbackType, size?: FeedbackSize) {
    this.type = type ?? FeedbackType.noRecords;
    this.size = size ?? FeedbackSize.Small;
  }

  get type(): FeedbackType {
    return this._type;
  }

  set type(value: FeedbackType) {
    this._type = value;
  }

  get size(): FeedbackSize {
    return this._size;
  }

  set size(value: FeedbackSize) {
    this._size = value;
  }

  public getUrlImage(): string {
    const feedbackImageFound = feedbackData.find(
      ({ type, size }) => type === this.type && size === this.size
    );
    if (!feedbackImageFound)
      throw Error(`Image not found at: ${this._feedbackImagesUrl}`);
    console.log(`${this._feedbackImagesUrl}/${feedbackImageFound.fileName}`);
    return `${this._feedbackImagesUrl}/${feedbackImageFound.fileName}`;
  }
}
