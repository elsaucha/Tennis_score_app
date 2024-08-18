import { createWidget, widget } from '@zos/ui'
import { log as Logger } from '@zos/utils'
import { TEXT_STYLE } from './index.style'

const logger = Logger.getLogger("tennis_score_app");

Page({
  onInit() {
    logger.debug("page onInit invoked");
    createWidget(widget.TEXT, {
          ...TEXT_a,
        });
  },

  build() {
    logger.debug('page build invoked')
    
  },
  

  onDestroy() {
    logger.debug("page onDestroy invoked");
  },
});
