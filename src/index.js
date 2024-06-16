const list = document.querySelector('ul');

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
