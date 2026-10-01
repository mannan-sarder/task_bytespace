import localFont from "next/font/local";

/**
 * Fonts used by the Figma design (Home frame).
 * Poppins: display and heading styles. Satoshi: body and label styles.
 * Clash Display: the "ByteSpace" wordmark in the logo only.
 * Font files live in app/fonts (see app/fonts/README.md).
 */

export const poppins = localFont({
  src: [
    { path: "../app/fonts/poppins/Poppins-Medium.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/poppins/Poppins-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const satoshi = localFont({
  src: [
    { path: "../app/fonts/satoshi/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../app/fonts/satoshi/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../app/fonts/satoshi/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const clashDisplay = localFont({
  src: [
    { path: "../app/fonts/clash-display/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash-display",
  display: "swap",
});
