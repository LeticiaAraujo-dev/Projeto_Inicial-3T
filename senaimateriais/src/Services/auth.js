export const usuariAutenti = () => localStorage.getItem(/* MUDAR */) !== null

export const parseJwt = () => {
    let base64 = localStorage.getItem(/* MUDAR */).split('.')[1];

    return JSON.parse(window.atob(base64))
}