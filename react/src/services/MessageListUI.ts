import { AppConfig } from '../utils/constants/AppConfig';
import { orderBy } from 'lodash';

export class MessageListUI {
  private AppConfig: typeof AppConfig;

  constructor(AppConfig: typeof AppConfig) {
    this.AppConfig = AppConfig;
  }

  /**
   * This is a UI helper which finds the nearest messageId in the messages list to the messageId parameter
   */
  proximalMessageId(messages: any[], messageId: string): string | undefined {
    let sorted = orderBy(messages, [this.AppConfig.sort]);
    let idx = sorted.findIndex(msg => msg._id === messageId);
    var proximalIdx = sorted.length > idx + 1 ? idx + 1 : idx - 1;
    return proximalIdx >= 0 ? sorted[proximalIdx]._id : undefined;
  }
}