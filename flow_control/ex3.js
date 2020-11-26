function evenOrOdd(number = 8) {
    if (!Number.isInteger(number)) {
      console.log('Error: argument is not an integer.');
      return;
    }
    console.log((number % 2) === 0 ? 'even' : 'odd');
}
