import { Button, Dialog } from "element-ui";
import Vue from "vue";

Vue.use(Dialog);
Vue.use(Button);

type ActionFn<T = void> = () => T;

interface IShowNoticeDialogOpts {
    title: string;
    message: string;
    confirmFn: ActionFn;
    confirmText: string;
}

export let showNoticeDialog: (opts: Partial<IShowNoticeDialogOpts>) => void;
export let closeNoticeDialog: ActionFn;

export default Vue.component("noticeDialog", {
    props: {
        title: String,
        message: String,
        confirmFn: Function,
        confirmText: String
    },
    data() {
        return {
            visible: false
        };
    },
    created() {
        Vue.set(this, "title", this.title || "提示");
        Vue.set(this, "message", this.message || "[ 显示内容 ]");
        Vue.set(this, "confirmText", this.confirmText || "确 定");

        showNoticeDialog =
            showNoticeDialog ||
            ((opts: Partial<IShowNoticeDialogOpts>) => {
                this._showFn();
                Vue.set(this, "title", opts.title || "提示");
                Vue.set(this, "message", opts.message || "[ 显示内容 ]");
                Vue.set(this, "confirmText", opts.confirmText || "确 定");
                Vue.set(this, "confirmFn", opts.confirmFn);
            });
        closeNoticeDialog =
            closeNoticeDialog ||
            (() => {
                this._closeFn();
                Vue.set(this, "title", null);
                Vue.set(this, "message", null);
                Vue.set(this, "confirmText", null);
                Vue.set(this, "confirmFn", null);
            });
    },
    methods: {
        _confirmFn() {
            this._closeFn();
            if (this.confirmFn && typeof this.confirmFn === "function") {
                this.confirmFn();
            }
            return true;
        },
        _showFn() {
            Vue.set(this, "visible", true);
        },
        _closeFn() {
            Vue.set(this, "visible", false);
        }
    }
});
