$(document).ready(function () {
  $('#searchbar').autocomplete({
    source: function (request, response) {
        $.getJSON('json/all.json', { q: request.term }, function (result) {
            response($.map(result.destinations, function (item) {
                return {
                    price: item.price,
                    title: item.title,
                    description: item.description,
                    link: item.link
                };
            }));
        });
    }
  });
});
fetch("./json/complet.json")
.then(function(response){
   return response.json();
}).then(function(products){
   let placeholdercomplet = document.querySelector("#complet");
   let placeholderbigcomplet = document.querySelector("#bigcomplet");
   let complet = "";
   let bigcomplet = "";
   for(let product of products){
    complet += `
    <div class="card m-2 p-0" id="${product.imageid}">
        <img src="${product.image}" class="card-img-top rounded-top w-100 p-0 m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title font-weight-bold" style="font-size:1.6em;"><a>${product.title}</a></h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text text-end">${product.price}&euro;</p>
          <hr class="my-4" />
          <div class="chip me-0" title="Type du Produit : ${product.type}">Catégorie du produit : ${product.type}</div>
          <hr class="my-4" />
          <p class="flex">
            <a href="#${product.title}" class="text-center w-50 btn btn-outline-warning" title="Plus de détails sur : ${product.title}" data-bs-toggle="modal" data-bs-target="#${product.id}"><i class="fa fa-arrows-alt"></i></a>
            <a href="tel:0145327373" class="text-center w-50 btn btn-outline-warning" title="Appelez nous pour emporter ce produit."><i class="fa fa-phone-alt"></i></a>
          </p>
          <hr class="my-4" />
          <a href="${product.link}" class="btn btn-warning text-light w-100">Commandez sur deliveroo</a>
        </div>
    </div>
      `;
      bigcomplet += `
      <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${product.image}" class="figure-img img-fluid border border-dark" /><br>
              <span class="badge text-bg-primary">${product.title}</span><br>
              <span class="badge text-bg-primary">${product.description}</span><br>
              <span class="badge text-bg-primary">Prix : ${product.price}</span><br>
              <span class="badge text-bg-primary">Type : ${product.type}</span><br>
              <span class="badge text-bg-primary">${product.allergenes}</span><br>
              <button type="button" class="badge btn btn-primary mb-2" onclick="window.location='tel:0145327373';">Appelez nous pour prendre en emporter.</button>
              <button type="button" class="badge btn btn-primary" onclick="window.location='${product.link}';">Commandez sur Deliveroo pour se faire livrer chez vous.</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
      `;
   }

   placeholdercomplet.innerHTML = complet;
   placeholderbigcomplet.innerHTML = bigcomplet;
});
fetch("./json/desserts.json")
.then(function(response){
   return response.json();
}).then(function(products){
   let placeholderdesserts = document.querySelector("#desserts");
   let placeholderbigdesserts = document.querySelector("#bigdesserts");
   let desserts = "";
   let bigdesserts = "";
   for(let product of products){
    desserts += `
    <div class="card m-2 p-0" id="${product.imageid}">
        <img src="${product.image}" class="card-img-top rounded-top w-100 p-0 m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title font-weight-bold" style="font-size:1.6em;"><a>${product.title}</a></h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text text-end">${product.price}&euro;</p>
          <hr class="my-4" />
          <div class="chip me-0" title="Type du Produit : ${product.type}">Catégorie du produit : ${product.type}</div>
          <hr class="my-4" />
          <p class="flex">
            <a href="#${product.title}" class="text-center w-50 btn btn-outline-warning" title="Plus de détails sur : ${product.title}" data-bs-toggle="modal" data-bs-target="#${product.id}"><i class="fa fa-arrows-alt"></i></a>
            <a href="tel:0145327373" class="text-center w-50 btn btn-outline-warning" title="Appelez nous pour emporter ce produit."><i class="fa fa-phone-alt"></i></a>
          </p>
          <hr class="my-4" />
          <a href="${product.link}" class="btn btn-warning text-light w-100">Commandez sur deliveroo</a>
        </div>
    </div>
      `;
      bigdesserts += `
      <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${product.image}" class="figure-img img-fluid border border-dark" /><br>
              <span class="badge text-bg-primary">${product.title}</span><br>
              <span class="badge text-bg-primary">${product.description}</span><br>
              <span class="badge text-bg-primary">Prix : ${product.price}</span><br>
              <span class="badge text-bg-primary">Type : ${product.type}</span><br>
              <span class="badge text-bg-primary">${product.allergenes}</span><br>
              <button type="button" class="badge btn btn-primary mb-2" onclick="window.location='tel:0145327373';">Appelez nous pour prendre en emporter.</button>
              <button type="button" class="badge btn btn-primary" onclick="window.location='${product.link}';">Commandez sur Deliveroo pour se faire livrer chez vous.</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
      `;
   }

   placeholderdesserts.innerHTML = desserts;
   placeholderbigdesserts.innerHTML = bigdesserts;
});
fetch("./json/entrees.json")
.then(function(response){
   return response.json();
}).then(function(products){
   let placeholderentrees = document.querySelector("#entrees");
   let placeholderbigentrees = document.querySelector("#bigentrees");
   let entrees = "";
   let bigentrees = "";
   for(let product of products){
    entrees += `
    <div class="card m-2 p-0" id="${product.imageid}">
        <img src="${product.image}" class="card-img-top rounded-top w-100 p-0 m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title font-weight-bold" style="font-size:1.6em;"><a>${product.title}</a></h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text text-end">${product.price}&euro;</p>
          <hr class="my-4" />
          <div class="chip me-0" title="Type du Produit : ${product.type}">Catégorie du produit : ${product.type}</div>
          <hr class="my-4" />
          <p class="flex">
            <a href="#${product.title}" class="text-center w-50 btn btn-outline-warning" title="Plus de détails sur : ${product.title}" data-bs-toggle="modal" data-bs-target="#${product.id}"><i class="fa fa-arrows-alt"></i></a>
            <a href="tel:0145327373" class="text-center w-50 btn btn-outline-warning" title="Appelez nous pour emporter ce produit."><i class="fa fa-phone-alt"></i></a>
          </p>
          <hr class="my-4" />
          <a href="${product.link}" class="btn btn-warning text-light w-100">Commandez sur deliveroo</a>
        </div>
    </div>
      `;
      bigentrees += `
      <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${product.image}" class="figure-img img-fluid border border-dark" /><br>
              <span class="badge text-bg-primary">${product.title}</span><br>
              <span class="badge text-bg-primary">${product.description}</span><br>
              <span class="badge text-bg-primary">Prix : ${product.price}</span><br>
              <span class="badge text-bg-primary">Type : ${product.type}</span><br>
              <span class="badge text-bg-primary">${product.allergenes}</span><br>
              <button type="button" class="badge btn btn-primary mb-2" onclick="window.location='tel:0145327373';">Appelez nous pour prendre en emporter.</button>
              <button type="button" class="badge btn btn-primary" onclick="window.location='${product.link}';">Commandez sur Deliveroo pour se faire livrer chez vous.</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
      `;
   }

   placeholderentrees.innerHTML = entrees;
   placeholderbigentrees.innerHTML = bigentrees;
});
fetch("./json/menus.json")
.then(function(response){
   return response.json();
}).then(function(products){
   let placeholdermenus = document.querySelector("#menus");
   let placeholderbigmenus = document.querySelector("#bigmenus");
   let menus = "";
   let bigmenus = "";
   for(let product of products){
    menus += `
    <div class="card m-2 p-0" id="${product.imageid}">
        <img src="${product.image}" class="card-img-top rounded-top w-100 p-0 m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title font-weight-bold" style="font-size:1.6em;"><a>${product.title}</a></h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text text-end">${product.price}&euro;</p>
          <hr class="my-4" />
          <div class="chip me-0" title="Type du Produit : ${product.type}">Catégorie du produit : ${product.type}</div>
          <hr class="my-4" />
          <p class="flex">
            <a href="#${product.title}" class="text-center w-50 btn btn-outline-warning" title="Plus de détails sur : ${product.title}" data-bs-toggle="modal" data-bs-target="#${product.id}"><i class="fa fa-arrows-alt"></i></a>
            <a href="tel:0145327373" class="text-center w-50 btn btn-outline-warning" title="Appelez nous pour emporter ce produit."><i class="fa fa-phone-alt"></i></a>
          </p>
          <hr class="my-4" />
          <a href="${product.link}" class="btn btn-warning text-light w-100">Commandez sur deliveroo</a>
        </div>
    </div>
      `;
      bigmenus += `
      <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${product.image}" class="figure-img img-fluid border border-dark" /><br>
              <span class="badge text-bg-primary">${product.title}</span><br>
              <span class="badge text-bg-primary">${product.description}</span><br>
              <span class="badge text-bg-primary">Prix : ${product.price}</span><br>
              <span class="badge text-bg-primary">Type : ${product.type}</span><br>
              <span class="badge text-bg-primary">${product.allergenes}</span><br>
              <button type="button" class="badge btn btn-primary mb-2" onclick="window.location='tel:0145327373';">Appelez nous pour prendre en emporter.</button>
              <button type="button" class="badge btn btn-primary" onclick="window.location='${product.link}';">Commandez sur Deliveroo pour se faire livrer chez vous.</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
      `;
   }

   placeholdermenus.innerHTML = menus;
   placeholderbigmenus.innerHTML = bigmenus;
});
fetch("./json/naan.json")
.then(function(response){
   return response.json();
}).then(function(products){
   let placeholdernaan = document.querySelector("#naan");
   let placeholderbignaan = document.querySelector("#bignaan");
   let naan = "";
   let bignaan = "";
   for(let product of products){
    naan += `
    <div class="card m-2 p-0" id="${product.imageid}">
        <img src="${product.image}" class="card-img-top rounded-top w-100 p-0 m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title font-weight-bold" style="font-size:1.6em;"><a>${product.title}</a></h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text text-end">${product.price}&euro;</p>
          <hr class="my-4" />
          <div class="chip me-0" title="Type du Produit : ${product.type}">Catégorie du produit : ${product.type}</div>
          <hr class="my-4" />
          <p class="flex">
            <a href="#${product.title}" class="text-center w-50 btn btn-outline-warning" title="Plus de détails sur : ${product.title}" data-bs-toggle="modal" data-bs-target="#${product.id}"><i class="fa fa-arrows-alt"></i></a>
            <a href="tel:0145327373" class="text-center w-50 btn btn-outline-warning" title="Appelez nous pour emporter ce produit."><i class="fa fa-phone-alt"></i></a>
          </p>
          <hr class="my-4" />
          <a href="${product.link}" class="btn btn-warning text-light w-100">Commandez sur deliveroo</a>
        </div>
    </div>
      `;
      bignaan += `
      <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${product.image}" class="figure-img img-fluid border border-dark" /><br>
              <span class="badge text-bg-primary">${product.title}</span><br>
              <span class="badge text-bg-primary">${product.description}</span><br>
              <span class="badge text-bg-primary">Prix : ${product.price}</span><br>
              <span class="badge text-bg-primary">Type : ${product.type}</span><br>
              <span class="badge text-bg-primary">${product.allergenes}</span><br>
              <button type="button" class="badge btn btn-primary mb-2" onclick="window.location='tel:0145327373';">Appelez nous pour prendre en emporter.</button>
              <button type="button" class="badge btn btn-primary" onclick="window.location='${product.link}';">Commandez sur Deliveroo pour se faire livrer chez vous.</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
      `;
   }

   placeholdernaan.innerHTML = naan;
   placeholderbignaan.innerHTML = bignaan;
});
fetch("./json/riz.json")
.then(function(response){
   return response.json();
}).then(function(products){
   let placeholderriz = document.querySelector("#riz");
   let placeholderbigriz = document.querySelector("#bigriz");
   let riz = "";
   let bigriz = "";
   for(let product of products){
    riz += `
    <div class="card m-2 p-0" id="${product.imageid}">
        <img src="${product.image}" class="card-img-top rounded-top w-100 p-0 m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title font-weight-bold" style="font-size:1.6em;"><a>${product.title}</a></h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text text-end">${product.price}&euro;</p>
          <hr class="my-4" />
          <div class="chip me-0" title="Type du Produit : ${product.type}">Catégorie du produit : ${product.type}</div>
          <hr class="my-4" />
          <p class="flex">
            <a href="#${product.title}" class="text-center w-50 btn btn-outline-warning" title="Plus de détails sur : ${product.title}" data-bs-toggle="modal" data-bs-target="#${product.id}"><i class="fa fa-arrows-alt"></i></a>
            <a href="tel:0145327373" class="text-center w-50 btn btn-outline-warning" title="Appelez nous pour emporter ce produit."><i class="fa fa-phone-alt"></i></a>
          </p>
          <hr class="my-4" />
          <a href="${product.link}" class="btn btn-warning text-light w-100">Commandez sur deliveroo</a>
        </div>
    </div>
      `;
      bigriz += `
      <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${product.image}" class="figure-img img-fluid border border-dark" /><br>
              <span class="badge text-bg-primary">${product.title}</span><br>
              <span class="badge text-bg-primary">${product.description}</span><br>
              <span class="badge text-bg-primary">Prix : ${product.price}</span><br>
              <span class="badge text-bg-primary">Type : ${product.type}</span><br>
              <span class="badge text-bg-primary">${product.allergenes}</span><br>
              <button type="button" class="badge btn btn-primary mb-2" onclick="window.location='tel:0145327373';">Appelez nous pour prendre en emporter.</button>
              <button type="button" class="badge btn btn-primary" onclick="window.location='${product.link}';">Commandez sur Deliveroo pour se faire livrer chez vous.</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
      `;
   }

   placeholderriz.innerHTML = riz;
   placeholderbigriz.innerHTML = bigriz;
});
fetch("./json/softs.json")
.then(function(response){
   return response.json();
}).then(function(products){
   let placeholdersofts = document.querySelector("#softs");
   let placeholderbigsofts = document.querySelector("#bigsofts");
   let softs = "";
   let bigsofts = "";
   for(let product of products){
    softs += `
    <div class="card m-2 p-0" id="${product.imageid}">
        <img src="${product.image}" class="card-img-top rounded-top w-100 p-0 m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title font-weight-bold" style="font-size:1.6em;"><a>${product.title}</a></h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text text-end">${product.price}&euro;</p>
          <hr class="my-4" />
          <div class="chip me-0" title="Type du Produit : ${product.type}">Catégorie du produit : ${product.type}</div>
          <hr class="my-4" />
          <p class="flex">
            <a href="#${product.title}" class="text-center w-50 btn btn-outline-warning" title="Plus de détails sur : ${product.title}" data-bs-toggle="modal" data-bs-target="#${product.id}"><i class="fa fa-arrows-alt"></i></a>
            <a href="tel:0145327373" class="text-center w-50 btn btn-outline-warning" title="Appelez nous pour emporter ce produit."><i class="fa fa-phone-alt"></i></a>
          </p>
          <hr class="my-4" />
          <a href="${product.link}" class="btn btn-warning text-light w-100">Commandez sur deliveroo</a>
        </div>
    </div>
      `;
      bigsofts += `
      <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${product.image}" class="figure-img img-fluid border border-dark" /><br>
              <span class="badge text-bg-primary">${product.title}</span><br>
              <span class="badge text-bg-primary">${product.description}</span><br>
              <span class="badge text-bg-primary">Prix : ${product.price}</span><br>
              <span class="badge text-bg-primary">Type : ${product.type}</span><br>
              <span class="badge text-bg-primary">${product.allergenes}</span><br>
              <button type="button" class="badge btn btn-primary mb-2" onclick="window.location='tel:0145327373';">Appelez nous pour prendre en emporter.</button>
              <button type="button" class="badge btn btn-primary" onclick="window.location='${product.link}';">Commandez sur Deliveroo pour se faire livrer chez vous.</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
      `;
   }

   placeholdersofts.innerHTML = softs;
   placeholderbigsofts.innerHTML = bigsofts;
});
fetch("./json/special.json")
.then(function(response){
   return response.json();
}).then(function(products){
   let placeholderspecial = document.querySelector("#special");
   let placeholderbigspecial = document.querySelector("#bigspecial");
   let special = "";
   let bigspecial = "";
   for(let product of products){
    special += `
    <div class="card m-2 p-0" id="${product.imageid}">
        <img src="${product.image}" class="card-img-top rounded-top w-100 p-0 m-0" alt="...">
        <div class="card-body">
          <h5 class="card-title font-weight-bold" style="font-size:1.6em;"><a>${product.title}</a></h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text text-end">${product.price}&euro;</p>
          <hr class="my-4" />
          <div class="chip me-0" title="Type du Produit : ${product.type}">Catégorie du produit : ${product.type}</div>
          <hr class="my-4" />
          <p class="flex">
            <a href="#${product.title}" class="text-center w-50 btn btn-outline-warning" title="Plus de détails sur : ${product.title}" data-bs-toggle="modal" data-bs-target="#${product.id}"><i class="fa fa-arrows-alt"></i></a>
            <a href="tel:0145327373" class="text-center w-50 btn btn-outline-warning" title="Appelez nous pour emporter ce produit."><i class="fa fa-phone-alt"></i></a>
          </p>
          <hr class="my-4" />
          <a href="${product.link}" class="btn btn-warning text-light w-100">Commandez sur deliveroo</a>
        </div>
    </div>
      `;
      bigspecial += `
      <div class="modal fade" id="${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${product.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${product.image}" class="figure-img img-fluid border border-dark" /><br>
              <span class="badge text-bg-primary">${product.title}</span><br>
              <span class="badge text-bg-primary">${product.description}</span><br>
              <span class="badge text-bg-primary">Prix : ${product.price}</span><br>
              <span class="badge text-bg-primary">Type : ${product.type}</span><br>
              <span class="badge text-bg-primary">${product.allergenes}</span><br>
              <button type="button" class="badge btn btn-primary mb-2" onclick="window.location='tel:0145327373';">Appelez nous pour prendre en emporter.</button>
              <button type="button" class="badge btn btn-primary" onclick="window.location='${product.link}';">Commandez sur Deliveroo pour se faire livrer chez vous.</button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
      `;
   }

   placeholderspecial.innerHTML = special;
   placeholderbigspecial.innerHTML = bigspecial;
});
function deletealluserinfo() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
  var cookie = cookies[i];
  var eqPos = cookie.indexOf("=");
  var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
  document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
  sendNotification("info", "Finalisation...");
  function deletealluserinfotermin() {
    sendNotification("success", "Toutes les infos ont été supprimé.");
    sendNotification("warning", "Actualisation du session dans :");
    sendNotification("error", "3s");
    setTimeout(() => {
      sendNotification("error", "2s");
      setTimeout(() => {
        sendNotification("error", "1s");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, 1000);
    }, 1000);
  }
  document.cookie.indexOf("useron!=true") != -1 ? redirectionuseron() : deletealluserinfotermin();
  function redirectionuseron() {
    sendNotification("info", "Une connection d'utilisateur à été détecté, redirection en cours...");
    redirectionuseron();
    setTimeout(() => {
      sendNotification("error","Ooups, la connection est trés lente ou à été interrompue.");
      sendNotification("info", "2eme tentative de suppression en cours...");
      redirectionuseronsimple();
      sendNotification("error", "Veuillez réessayer plus tard.");
      sendNotification("warning", "Actualisation du session dans :");
      sendNotification("error", "3s");
      setTimeout(() => {
        sendNotification("error", "2s");
        setTimeout(() => {
          sendNotification("error", "1s");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }
}
