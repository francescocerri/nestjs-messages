nest generate module messages -> crea cartella messages con dentro il module

nest generate controller messages/messages --flat
 -> crea il file di controller, modifica anche il file .module, aggiungendo questo controller tra gli altri
 -> controller (tipo) messages(dentro cartella messages)/messages(nome del controller) --flat (non creare un extra cartella chiamata controller e dentro ci metterebbe messages.controller)

 ---- VALIDATION -----
 DTO -> data transfer object, creiamo una classe che descrive le differenti proprietà
 che la richiesta deve avere

 Flow
 -> viene utilizzato il class-transform per trasformare il body in un istanza del dto
 -> usa il class-validator per validare questa istanza
 -> se c'è un errore di validazione risponde con un errore, altrimenti fornisce il body all'handler

How type info is preserved when ts -> js?
 se nel tsconfig abbiamo questa props
  ->"emitDecoratorMetadata": true,
Allora alcune informazioni rimarrano nella compilazione da ts a js, 

