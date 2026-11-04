# BookDragons - en mockup

## Oppgaven i et nøtteskall

Du jobber som frontendutvikler i et byrå. Teamet ditt jobber med et prosjekt for
BookDragons, en bokhandel som trenger en ny nettside og nettbutikk. En av de
andre frontendutviklerene på teamet ditt har tjuvstartet litt, og implementert
en statisk utgave av forsiden på nettbutikken slik at du, som skal jobbe med
Payload CMS, kan komme i gang med å sette opp CMSet.

I dette prosjektet ligger mockupen klar for deg. Du trenger bare å sette opp
`.env` og kjøre opp prosjektet som du pleier, så finner du det du ser etter på
localhost:3000.

## Hva er gjort så langt?

Mockupen består kun av statisk HTML og CSS. That's it. Ingen React-komponenter,
blokker, collections eller noe annet. Det du ser når du går inn på localhost:
3000 er kun statisk kode, og skal ikke på noen måte anses for å være helt
ferdig. Det kan være problemer med responsivitet, skalering og størrelser du må
rette opp i etterhvert som du jobber med prosjektet.

## Så, hva ER egentlig oppgaven?

Du skal gjøre følgende:

- Ut fra mockupen og koden som mockupen består av skal du først lage
  React-komponenter som er gjenbrukbare. Dersom du leser CSS-koden grundig, vil
  du se at det noen steder finnes flere varianter av komponenter enn de som
  faktisk brukes i mockupen per dags dato. Disse skal også implementeres.
- Du må lage collections og blocks i Payload CMS, og du må bruke din kompetanse
  og kunnskap til å avgjøre når noe skal være en block (kun for presentasjon) og
  når det skal være en samling (lagres sånn at det kan hentes fra APIet og
  brukes i relasjoner). Bruk god tid på kartlegging og skissering her før du
  binder deg til en teknisk løsning.
- Sidenavigasjonen i toppen, samt selve forsiden, skal kodes som globals i
  Payload CMS. Hvis du ikke er kjent med globals, må du sette deg inn i hva
  disse gjør; kort fortalt fungerer de likt som collections, med det unntak at
  det bare kan lages én av dem i CMSet. Med andre ord, fordi vi bare skal ha én
  forside og én sidenavigasjon på hele siden, skal disse være globals slik at
  redaktørene ikke lager flere versjoner av disse ved et uhell.
- Det skal være mulig å endre hele forsiden i Payload CMS uten å kode. Dette
  inkluderer bilder, tekst, rekkefølge på innhold, seksjonene med bøker som
  vises, liste over arrangementer, og så videre.
- Forsøk å tenke gjennom hva en ikke-teknisk person, som kunder flest er, vil
  forstå og ikke forstå i admingrensesnittet. Det er viktig at du er flink til å
  lage labels, hjelpetekster og forklaringer, og sette rammer som gjør at det
  ikke er mulig å la påkrevde felter stå tomme eller at feilutfylling er mulig.

## Fremgangsmåte

Bruk degit til å hente filene i dette prosjektet uten å klone dem, med
kommandoen `npx degit vegarcodes/bookdragons-mockup` i terminalen etter du har
navigert deg til mappen der du vil ha prosjektet. Jobb med prosjektet og prøv å
ferdigstille så mye som mulig. Vis gjerne faglærer hvordan progresjonen din er.

Hensikten med denne oppgaven er **mengdetrening.** Du skal jobbe mest mulig med
Payload, og siden flere studenter har etterlyst å få jobbe i en eksisterende
kodebase, har vi gjort jobben med markup og styling for deg. Du må selv sette
deg inn i hvordan prosjektet henger sammen, og spesielt hvordan stylingen er
satt opp da den nok er mer kompleks enn du er vant med fra tidligere.


1. Yellow hero — big image, heading, intro text, CTA button
2. Book reel — scrollable row of book cards with a section heading
   (used 3
   times: "Nyheter i          
   butikken", "#BookTok", "Lagertømming!")
3. Staff recommendation — alternating layout, employee review text +
   blockquote + book card
4. Staff grid — green section, three employee cards in a row
5. Events promo — article text + image + CTA on left, upcoming events list on
   right

  ---
Suggested block names:

Block slug: HeroBlock
What it covers: Hero section: image, heading, body text, button
────────────────────────────────────────
Block slug: BookShelfBlock
What it covers: A labelled reel of books (relates to a Books collection)
────────────────────────────────────────
Block slug: StaffRecommendationBlock
What it covers: One or more employee reviews with book relation
────────────────────────────────────────
Block slug: StaffGridBlock
What it covers: The team section (relates to a Staff/Employees collection)
────────────────────────────────────────
Block slug: EventsSectionBlock
What it covers: Events promo text + upcoming events list (relates to Events
collection)

  ---
What should be Collections instead:

- Books — title, author, cover image, price, tags; reused across multiple blocks
- Staff / Employees — name, photo, bio; reused in both the grid and
  recommendation blocks
- Events — title, date, time, description, ticket price; queried for the
  upcoming list