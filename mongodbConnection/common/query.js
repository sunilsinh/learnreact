module.exports.createQuery = (collectionName, data) => {
  return new Promise((resolve, reject) => {
    collectionName.create(data).then((data) => {
      resolve(data)
    }).catch((err) => {
      reject(`Something went wrong ${err}`)
    })
  })
}