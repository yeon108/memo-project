export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  try {
    return;
    JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log("error:", err.message);
  }
}
