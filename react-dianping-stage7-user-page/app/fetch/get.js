import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
  var result = fetch(url, {
      method:'GET',
      credentials: 'include',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      }
  });

  return result;
}
