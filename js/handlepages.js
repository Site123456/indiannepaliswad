fetch("https://www.indian-nepaliswad.fr/menulist/menu.json")
.then(function(response){
   return response.json();
}).then(function(products){
    let menu = "",
    content = "",
    menudet = "";
    for(let product of products){
        for(let option of product.options){
            for(var i = 0; i < option.options.length; i++) {
                content += `<option>${option.options[i]}</option>`;
            }
            menudet += `
            <div class="col-lg-6">
                <h4>${option.title}</h4>
                <select class="form-select">
                ${content}
                </select>
            </div>
            `;
            content="";
        }
        menu += `
        <section class="py-5">
            <div class="container">
                <div class="row gx-5">
                <aside class="col-lg-4">
                    <div class="border rounded-4 mb-3 d-flex justify-content-center">
                    <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href="#">
                        <img style="max-width: 100%; max-height: 100vh; margin: auto;" class="rounded-4 fit" src="${product.image}" onerror="$(this).attr('src','https://www.indian-nepaliswad.fr/assets/logo.png');$(this).css('filter','var(--whiteindark)');"/>
                    </a>
                    </div>
                </aside>
                <main class="col-lg-8">
                    <div class="ps-lg-3">
                    <h4 class="title">
                        ${product.title}
                    </h4>
                    <div class="row">
                        <dd class="badge bg-success" style="width:fit-content;">${product.type}</dd>
                        <dd class="ms-2 badge btn btn-danger" style="width:fit-content;"><i class="ri-heart-3-line"></i>&nbsp;Ajouter au favoris</dd>
                    </div>
                    <div class="d-flex flex-row my-3">
                        <div class="mb-1 me-2">
                        <i class="fa fa-info-circle"></i>
                        <span class="ms-1">
                        Contenu :
                        </span>
                        </div>
                        <span class="text-muted">${product.description}</span>
                    </div>

                    <div class="mb-3">
                        <span class="h5">${product.price}&euro;</span>
                        <span class="text-muted">/ pour 1</span>
                    </div>
                    <div class="row">
                        ${menudet}
                    </div>
                    </div>
                </main>
                </div>
            </div>
        </section>
        `;
        $("#menu").html(menu);
        content = "";
        menudet = "";
    }
});