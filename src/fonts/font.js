import { DM_Sans, Kanit, Lora, Montserrat, Open_Sans } from "next/font/google";

import localFont from "next/font/local";
export const lora = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  style: ["normal"],
});
export const dmsans = Open_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
  variable: "--font-dmsans",
});
export const suseSans = localFont({
  src: "./SUSE-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-suse",
});
