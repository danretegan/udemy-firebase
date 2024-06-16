const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) => {
  //   console.log(recipe.created_at.toDate());
  let html = `
  <li recipe-id="${id}">
  <div>${recipe.title}</div>
  <div><small>author: ${recipe.author}</small></div>
  <div><small>date: ${recipe.created_at.toDate()}</small></div>
  <button class="btn btn-danger btn-sm my-2">delete</button>
  </li>
  `;

  // console.log(html);
  list.innerHTML += html;
};

//! functie de stergere reteta din UI:
const deleteRecipe = id => {
  const retete = document.querySelectorAll('li');
  retete.forEach(elem => {
    if (elem.getAttribute('recipe-id') === id) {
      elem.remove();
    }
  });
};

//! get documents:
// TODO Real-time Listeners [.onSnapshot()]
db.collection('recipes').onSnapshot(snapshot => {
  //   console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    // console.log(change);
    const doc = change.doc;
    // console.log(doc);
    if (change.type === 'added') {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === 'removed') {
      deleteRecipe(doc.id);
    }
  });
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

//! deleting data:
list.addEventListener('click', e => {
  //   console.log(e);
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentElement.getAttribute('recipe-id');
    // console.log(id);
    db.collection('recipes')
      .doc(id)
      .delete()
      .then(() => {
        console.log('recipe deleted!');
      })
      .catch(err => {
        console.log(err);
      });
  }
});
