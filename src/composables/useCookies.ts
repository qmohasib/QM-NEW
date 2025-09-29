import Cookies from "js-cookie";

export function useCookies(prefix = "app_") {
  const set = (key: string, value: unknown, days = 365) =>
    Cookies.set(prefix + key, JSON.stringify(value), { expires: days });

  const get = <T = unknown>(key: string, fallback?: T): T | undefined => {
    const raw = Cookies.get(prefix + key);
    try { return raw ? (JSON.parse(raw) as T) : fallback; } catch { return fallback; }
  };

  const remove = (key: string) => Cookies.remove(prefix + key);
  return { set, get, remove };
}
