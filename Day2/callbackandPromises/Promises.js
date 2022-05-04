let counter = 2;
let promises = new Promise((resolve, reject) => {
  if (counter === 2) {
    resolve();
  } else {
    reject();
  }
})
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("Error Occured");
  });
