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
  { tid: "vetur 2026", heiti: "Kom og rokna – 6 nýggjar bøkur", slag: "", fak: "Støddfrøði · forskúli og grunddeild", stoda: "",
    tekstur: "Seks nýggjar bøkur koma út í Kom og rokna-røðini í desember. Kom og rokna er roknitilfar til forskúlan og grunddeildina, skrivað av Johann Petersen." },
  { tid: "vár 2027", heiti: "Plantur til matna", slag: "Snar", fak: "Temasíða", stoda: "",
    tekstur: "Nýggj temasíða á Snar. Væntandi tíðliga á vári 2027." },
  { tid: "heyst 2027", heiti: "Jarðfríða", slag: "Snar", fak: "Náttúra og tøkni · 3.–5. flokkur", stoda: "",
    tekstur: "Temað Jarðfrøði við Jarðfríðu. Næmingarnir fylgja jarðfrøðinginum Jarðfríðu og læra at lesa søguna, sum stendur skrivað í grótinum. Gjørt í samstarvi millum Nám og Jarðfeingi, og kann brúkast saman við GeoSkúla. Væntandi út ímóti heysti 2027." }
];
