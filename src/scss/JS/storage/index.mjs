// This is where I write code to save, store and delete token -
//for users to be able to login again after they have created a profile with acution house

/// old code

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function remove(key) {
  localStorage.removeItem(key);
}
