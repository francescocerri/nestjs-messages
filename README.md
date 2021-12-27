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
  -> "emitDecoratorMetadata": true,
Allora alcune informazioni rimarrano nella compilazione da ts a js, 

---- SERVICE & REPOSITORY -----
Sono entrambe classi
Service:
  -> Business logic, ricevere dati da un repository
  -> Usa 1 o + repo per trovare o salvare info

repository:
  -> Storage-related logic, iterazioni col db
  -> di solito implementa dto

Dependency injection, perchè esiste
- Il controller dipende dal service e il service dal repository
- Inversion of control principle
  - se vuoi avere del codice riutilizzabile devi scrivere delle classi che non creano istanze delle proprie dipendeze/proprie copie , ovvero questo è sbagliato
  
export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    this.messagesRepo = new MessagesRepository();
  }
}

Questo è un po' meglio, perchè RICEVE le proprie dipendenze
export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor(repo: MessagesRepository) {
    this.messagesRepo = repo;
  }
}

Ancora meglio, perchè non richiede specificamente MessageRepository, per esempio nei test automatici, si può creare un FakeRepository che lavora molto più velocemente
interface Repository {
  findOne(id: string);
  findAll();
  create(content: string);
}
export class MessagesService {
  messagesRepo: Repository;
  constructor(repo: Repository) {
    this.messagesRepo = repo;
  }
}

Però facendo così avremmo molto più da scrivere, per questo si utilizza la dependency injection che ci permette di usare l'inversion of control senza dover creare una marea di differenti classi e interfacce ogni volta che vogliamo un controller.

Funziona con il DI container/Injectors, che registra una lista di classi e le loro dipendenze e la lista delle istanze create, tutte le volte che richiami un istanza in realtà viene passata sempre la stessa
