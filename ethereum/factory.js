
import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xa455E1218BB4c87914C38364D6f6945F4Ce27c49'
);

export default instance;