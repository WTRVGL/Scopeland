export const isAuthenticated = () => {
  const cookie = getCookie("scopelandId");
  if (!cookie) {
    return false;
  }
  return true;
};

export function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}
