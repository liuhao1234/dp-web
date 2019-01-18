export default function logOut(){
    sessionStorage.removeItem("beautifulGirl");
    window.location.reload();
}