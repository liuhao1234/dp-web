import store from "../../redux/store";
import { clearToken } from "../../redux/action/tokenActions";
export default function logOut(){
    store.dispatch(clearToken());
    window.location.reload();
}