import Signal from "../../../framework/core/Signal";
import mvcView from "../../../framework/ui/mvcView";

let { ccclass, property } = cc._decorator

export enum ConfirmOption {
    Default,
    No,
    Yes,
}


@ccclass
export default class UIForcedUpdata extends mvcView {

    @property(cc.Label)
    labelContent: cc.Label = null;

    @property(cc.Button)
    btn_yes: cc.Button = null

    @property(cc.Button)
    btn_no: cc.Button = null

    @property(cc.Button)
    btn_close: cc.Button = null
    onConfirm: Signal = new Signal();


    onLoad() {
        this.register(this.btn_yes, this.click_yes)
        this.register(this.btn_no, this.click_no)
        this.register(this.btn_close, this.click_close)
    }

    onShown(text, callback, target) {
        this.labelContent.string = text;
        this.onConfirm.on(callback, target);
    }

    option: ConfirmOption = ConfirmOption.Default;

    click_yes() {
        this.option = ConfirmOption.Yes;
        vm.hide(this)
    }

    click_no() {
        this.option = ConfirmOption.No;
        vm.hide(this)
    }

    click_close() {
        this.option = ConfirmOption.Default
        vm.hide(this)
    }

    onHidden() {
        this.onConfirm.fire(this.option)
    }

}