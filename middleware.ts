export { auth as middleware } from "@/lib/auth"
export const config = {
  // Cambiamos el matcher para excluir TODA la carpeta /api de la protección automática
  matcher: ["/((?!api|login|_next/static|_next/image|favicon.ico|$).*)"],
}