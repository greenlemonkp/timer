let input = process.argv.splice(2);
  for (let i of input) {
    if (Number(i) < 0 || Number(isNaN(i))) {
      continue;
    } else {
      setTimeout(() => {
        console.log("beep");
      }, Number(i) * 1000);
      i++;
    }
  }

