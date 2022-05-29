import * as utils from '../utils/service';
import * as constants from '../utils/constants';

const deviceService = utils.buildService(constants.API_DEVICE);
const gatewayService = utils.buildService(constants.API_GATEWAY);

export { deviceService, gatewayService };
