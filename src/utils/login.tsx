import toast from "react-hot-toast"
import { googleLoginService } from "../services/loginService"
import { setUser } from "./setUser"
import { InfoToast } from "../components/Toast"
import { ui } from "./ui"
import initDataUser from "./initData"
import storage from "./storage"
import { useGoogleOneTapLogin } from "@react-oauth/google"
import store from "../app/store"
import { setIsLogin } from "../features/user/userSlice"

export const handleLoginSuccessGG = (codeResponse: any) => {
  googleLoginService(codeResponse).then((fb) => {
    const data = fb?.data
    if (fb?.result == 1) {
      setUser({ isLogin: true, ...data })
      initDataUser()
      toast.custom((t) => <InfoToast t={t} infoText="Đăng nhập thành công" />, {
        duration: 3000,
      })
    } else {
      toast.custom((t) => <InfoToast t={t} infoText="Đăng nhập thất bại" />, {
        duration: 3000,
      })
    }
    ui.hiddenLoginModal()
  })
}

export const handleLoginFalseGG = () => {
  storage.remove("token")
  store.dispatch(setIsLogin(false))

  // console.log("show-one-tap")
  // useGoogleOneTapLogin({
  //   onSuccess: handleLoginSuccessGG,
  //   onError: () => {
  //     console.log("Login Failed")
  //   },
  // })
}
