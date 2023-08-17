export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  const data = localStorage.getItem(key);
  if (!data) {
    return [];
  }
  return JSON.parse(data);

  //  catch (err) {
  //   console.log("error:", err.message);
  // }
}
