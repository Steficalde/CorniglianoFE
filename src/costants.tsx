//same as tailwind breakpoint

import award from "./assets/images/trophy.png";
import hug from "./assets/images/hugstore-logo.png";
import download from "./assets/images/download.png";
import store from "./assets/images/store.png";
import app from "./assets/images/app.png";
import qr from "./assets/images/qr.png";
import completed from "./assets/images/complete.png";
import Coin from "./components/canvas/Coin";

export enum MIN_WIDTHS {
  SM = 640,
  LG = 1024,
  XL = 1280,
}
export const motivations = [
  {
    title: 'Guadagni premi',
    company_name: 'prodotti dai ragazzi della scuola A. Volta',
    icon: award,
    iconBg: '#2c47b4',
    date: 'March 2020 - April 2021',
    points: [
      "Utilizzando l'app puoi guadagnare punti",
      'Con i punti puoi scegliere tra diversi premi',
    ],
  },
  {
    title: 'Sostieni i piccoli negozi',
    company_name: 'CIV Cornigliano',
    icon: hug,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      "aiuti i negozi di Cornigliano aderenti all'iniziativa",
      'puoi conoscere nuovi negozi della realtà di Cornigliano',
    ],
  },
  {
    title: 'Partecipi ad un progetto scolastico',
    company_name: 'I.Calvino, A.Volta',
    icon: hug,
    iconBg: '#2b49bd',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Questo progetto è reso possibile dalle scuole della zona che credono in Cornigliano',
    ],
  },
]

export const steps = [
  {
    title: "Scarica L'app di Hugstore",
    company_name: 'disponibile su Google Play Store e Apple Store',
    icon: download,
    iconBg: '#2c47b4',
    date: 'March 2020 - April 2021',
    points: [],
  },
  {
    title: 'Recati in un negozio associato',
    company_name: 'CIV Cornigliano',
    icon: store,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      "recati in un negozio aderente all'iniziativa",
      'esegui un acquisto',
    ],
  },
  {
    title: "apri l'applicazione",
    company_name: 'I.Calvino, A.Volta',
    icon: app,
    iconBg: '#2b49bd',
    date: 'Jan 2022 - Jan 2023',
    points: ["apri l'applicazione e registrati/accedi"],
  },
  {
    title: 'genera il buono',
    company_name: 'I.Calvino, A.Volta',
    icon: qr,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'premi il pulsante "qr-code" in basso',
      "inserisci l'importo dell'acquisto",
      'fai vedere il telefono al venditore',
    ],
  },
  {
    title: 'il gioco è fatto!',
    company_name: 'I.Calvino, A.Volta',
    icon: completed,
    iconBg: '#2b49bd',
    date: 'Jan 2022 - Jan 2023',
    points: [
      <div className="flex gap-5 items-center">
        <p>hai ricevuto i tuoi punti!</p>
        <div className="w-[100px] h-[100px]">
          <Coin></Coin>
        </div>
      </div>,
    ],
  },
]
export const handleScrollClick = (id: string) => {
  // @ts-ignore
  document.getElementById(id).scrollIntoView()
}
export const motivs = [
  {
    title: 'Guadagni premi',
    company_name: 'prodotti dai ragazzi della scuola A. Volta',
    image: award,
    iconBg: '#2c47b4',
    date: 'March 2020 - April 2021',
    points: [
      "Utilizzando l'app puoi guadagnare punti",
      'Con i punti puoi scegliere tra diversi premi',
    ],
  },
  {
    title: 'Sostieni i piccoli negozi',
    company_name: 'CIV Cornigliano',
    image: hug,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      "aiuti i negozi di Cornigliano aderenti all'iniziativa",
      'puoi conoscere nuovi negozi della realtà di Cornigliano',
    ],
  },
  {
    title: 'Partecipi ad un progetto scolastico',
    company_name: 'I.Calvino, A.Volta',
    image: hug,
    iconBg: '#2b49bd',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Questo progetto è reso possibile dalle scuole della zona che credono in Cornigliano',
    ],
  },
]
export const TITLE = 'Hugstore'
export const DESCRIPTION = 'Hugstore is a platform for buying and selling hugs.'

export const APPLE_APP_URL =
  'https://apps.apple.com/it/app/hugstore/id6448843909'
export const GOOGLE_APP_URL =
  'https://play.google.com/store/apps/details?id=it.hugstore.hugstore&pli=1'
export const SERVER_URL = 'https://hugstore.it/api' //api

// In the Menu tere is a function thatreplace underscore with space
export enum MENU {
  Home = '/',
  Shops = '/shops',
  Contatti = '/contatti',
}
export enum ADMIN_MENU {
  Utenti = '/admin/users',
  Negozi = '/admin/shops',
  Premi = '/admin/awards',
  Impostazioni = '/admin/settings',
}
