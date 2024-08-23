export default function handleResponseFromAPI(promise) {
  try {
    return promise.then(() => ({ status: 200, body: 'success' }))
      .catch(() => Error())
      .finally(() => console.log('Got a response from the API'));
  } catch (error) {
    return Error();
  }
}
