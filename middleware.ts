export { auth as middleware } from "@/lib/auth"
export const config = {
  // El matcher define qué rutas pasan por el middleware.
  // Aquí protegemos TODO, excepto: api/auth, login, página principal, estáticos e imágenes.
  matcher: ["/((?!api/auth|login|_next/static|_next/image|favicon.ico|$).*)"],
}