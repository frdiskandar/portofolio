export { cn } from "cn"

// Sumber proyek berupa video (mis. .webm) harus dirender dengan <video>, bukan <img>.
export const isVideoSource = (src = "") =>
  src.split(/[?#]/)[0].toLowerCase().endsWith(".webm")
