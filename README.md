crud-clientes
  - Exemplo de CRUD
  - ex. de organização de pastas do modulo
  - in-memory-db

dynamic-component
  - implementado exempo do angular;
  - exemplo de como varer um array de forma dinamica pelo index (-1)

clean-architecture
  - exemplo que demonstra uma possível implementachar da clean architeture

// requerimento
node 12.21.0
npm 6.14.11

// run
npm run ng serve ngrx-beginner


//cria um workspace sem uma aplicacao
ng new angular-playground --create-application=false

//cria uma aplicacao no workspace
ng g application crud-clientes --routing=true

// start a aplicacao crud-clientes
ng serve crud-clientes


// cria um modulo chamado 'clientes2' no projeto 'crud-clientes' com
// um component de mesmo nome 'clientes2' e
// cria uma rota lazy-loading com path 'lilo' no modulo 'app'
ng g m clientes2 --project=crud-clientes --route=lilo --module=app

//cria um component no projeto especificado
ng g c clientes/components/cliente-main --project=crud-clientes
