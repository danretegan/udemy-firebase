const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = recipe => {
  //   console.log(recipe.created_at.toDate());
  let html = `
  <li>
  <div>${recipe.title}</div>
  <div>author: ${recipe.author}</div>
  <div>date: ${recipe.created_at.toDate()}</div>
  </li>
  `;

  // console.log(html);
  list.innerHTML += html;
};

//! get documents:
db.collection('recipes')
  .get()
  .then(snapshoot => {
    // when we have the data
    // console.log(snapshoot.docs[0].data());
    snapshoot.docs.forEach(doc => {
      //   console.log(doc.data());
      addRecipe(doc.data());
    });
  })
  .catch(err => {
    console.log(err);
  });

//! add documents:
form.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();

  //* Definim obiectul (documentul) si modalitatea de a obtine datele:
  const recipe = {
    title: form.recipe.value, // Obținem titlul rețetei din formular.
    created_at: firebase.firestore.Timestamp.fromDate(now), // Setăm data curentă.
  };

  db.collection('recipes')
    .add(recipe)
    .then(() => {
      console.log('recipe added!');
    })
    .catch(err => {
      console.log(err);
    });
});
