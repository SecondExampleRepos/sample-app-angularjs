import { orderBy } from 'lodash';
import { AppConfig } from '../utils/constants/AppConfig';

export class MessageListUI {
  private $filter: any;
  private AppConfig: typeof AppConfig;

  constructor($filter: any, AppConfig: typeof AppConfig) {
    this.$filter = $filter;
    this.AppConfig = AppConfig;
  }

  /**
   * This is a UI helper which finds the nearest messageId in the messages list to the messageId parameter
   */
  proximalMessageId(messages: any[], messageId: string): string | undefined {
    let sorted = orderBy(messages, this.AppConfig.sort);
    let idx = sorted.findIndex(msg => msg._id === messageId);
    let proximalIdx = sorted.length > idx + 1 ? idx + 1 : idx - 1;
    return proximalIdx >= 0 ? sorted[proximalIdx]._id : undefined;
  }
}