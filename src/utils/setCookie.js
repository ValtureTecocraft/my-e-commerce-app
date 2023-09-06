export function setCookie(name, value, days) {
  const expirationDate = new Date();
  days ?? expirationDate.setDate(expirationDate.getDate() + days);

  const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )};expires=${expirationDate.toUTCString()};path=/`;
  document.cookie = cookie;
}
