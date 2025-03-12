import DataCenter, { dc, field } from "../../core/DataCenter";

@dc("dy")
class DouyinStorage extends DataCenter {

    isFromSidebar = false;

    sidebarAvailable = false;

    @field()
    sidebarRewardClaimed = false;

}

export default DataCenter.register(DouyinStorage)