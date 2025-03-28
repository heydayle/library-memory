import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import type {VueInstance} from "@vueuse/core";

export const SweetAlertOptions = {
  reverseButtons: true,
  confirmButtonColor: '#00C16A',
  cancelButtonColor: 'transparent',
  title: 'Alert',
  text: 'Content message',
  customClass: 'nb-alert',
  confirmButtonText: 'OK',
  cancelButtonText: 'Cancel',
  showCancelButton: false,
}
const $swal = {
  install: (Vue: VueInstance, options: any) => {
    Vue.provide('Swal', Swal.mixin(options))
  },
}
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use($swal, SweetAlertOptions)
})