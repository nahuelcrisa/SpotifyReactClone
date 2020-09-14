/* DOCUMENTACION DE LA API DE SPOTIFY */

// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#






export const authEndpoint = "https://accounts.spotify.com/authorize";

/* Cuando el usuario clickea el boton de login con spotify lo envia directamente a la API de spotify para que realice la autenticacion necesaria */

const redirectUri = "http://localhost:3000/";

/* Luego de que se logueo correctamente cuando esta autorizado es redirigido denuevo a mi aplicacion */

const clientId =  "79899372dc244675a145784bcb955cb0"