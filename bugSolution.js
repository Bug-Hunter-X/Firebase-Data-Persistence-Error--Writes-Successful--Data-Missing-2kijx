// Corrected code in bugSolution.js

// ... other code ...

database.ref('/myData').set({ key: 'value' })
  .then(() => {
    console.log('Data written successfully!');
  })
  .catch((error) => {
    console.error('Error writing data:', error);
  });

// ... other code ... 