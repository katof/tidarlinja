/* ------------------------------------------------------------------
   ÚTGÁVUR ÁVEGIS  –  rætta her
   ------------------------------------------------------------------
   Hvør útgáva er ein linja { ... }. Tú kanst rætta, leggja aftrat
   ella strika. Tíðarlinjan raðar sjálv eftir tíð.

   tid       árstíð og ár:  "vár 2027", "summar 2027", "heyst 2027", "vetur 2027"
             (vetur 2026 er veturin í enda av 2026, desember–februar)
             Tú kanst eisini skriva ein mánað ("desember 2026") ella bert eitt ár ("2028").
   heiti     heitið á útgávuni
   slag      t.d. Pappírsbók, i-bók, sBók, Ljóðbók, Fakportalur, Snar  (kann vera tómt)
   fak       lærugrein og/ella flokkur  (kann vera tómt)
   stoda     Ætlað · Í skriving · Í umbróti · Til prentingar · Útkomin  (kann vera tómt)
   tekstur   ein stuttur tekstur  (kann vera tómur: "")

   ------------------------------------------------------------------ */

const UNDIRHEITI = "Útgávur ávegis frá Námi";

const UTGAVUR = [
  { tid: "vetur 2026", heiti: "Rokning – 6 nýggjar bøkur", slag: "Pappírsbók", fak: "Støddfrøði · fólkaskúlin", stoda: "",
    tekstur: "Seks nýggjar bøkur koma út í Rokning-røðini í desember. Rokning er bókaheild til støddfrøði í fólkaskúlanum, og røðin fevnir higartil um Rokning 1 til Rokning 6." },
  { tid: "heyst 2027", heiti: "Jarðfríða", slag: "", fak: "", stoda: "",
    tekstur: "Væntandi út ímóti heysti 2027." }
];
