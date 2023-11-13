import animationHandle from '../js/modules/animações.js'
import changeSlide from '../js/modules/inicio.js'
import menuMobileHandle from '../js/modules/menu.js'
import changeAdicionais from '../js/modules/changeAdd.js'

animationHandle()
changeSlide()
menuMobileHandle()
changeAdicionais()


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHCjzQEEZvbPWzy1eLRU9FitI1ZH8jA6c",
  authDomain: "novak-57d92.firebaseapp.com",
  projectId: "novak-57d92",
  storageBucket: "novak-57d92.appspot.com",
  messagingSenderId: "200999826977",
  appId: "1:200999826977:web:46dd411ae76c8c13afd560",
  measurementId: "G-32GGV08HYT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);