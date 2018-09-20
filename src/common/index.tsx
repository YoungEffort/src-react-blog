import 'whatwg-fetch'
import sidebarbg from '../assets/img/sidebarbg.jpg'
// export const api = 'http://localhost:8001/api'
export const api = 'http://132.232.34.190/api'
export const headerImg =sidebarbg;
export const format = (date: string): string => {
  const myDate = new Date(date)
  const year = myDate.getFullYear()
  const month = myDate.getMonth() + 1
  const day = myDate.getDate()
  return `${year}-${month}-${day}`
}

export const dataToString = (data: object) => {
  const array: any = []
  let index = 0
  for (const item in data) {
    if (data[item]) {
      array[index++] = [item, data[item]]
    }
  }
  return new URLSearchParams(array).toString()
}

export const blogFetch = (
  url: string,
  data?: object,
  method: string = 'GET'
): Promise<Response> => {
  let initObj = {}
  url = api + url
  let dataStr = ''
  if (data) {
    dataStr = dataToString(data)
  }
  if (method === 'GET') {
    if (data) {
      if (url.indexOf('?') > -1) {
        url += '&' + dataStr
      } else {
        url += '?' + dataStr
      }
    }
  } else {
    initObj = {
      body: dataStr,
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }),
      method
    }
  }
  return fetch(url, initObj).then(response => response.json())
}
