/* ------------------------------------------------------------------
   ÚTGÁVUR ÁVEGIS  –  rætta her
   ------------------------------------------------------------------
   Hvør útgáva er ein linja { ... }. Tú kanst rætta, leggja aftrat
   ella strika. Tíðarlinjan raðar sjálv eftir tíð.

   tid       árstíð og ár:  "vár 2027", "summar 2027", "heyst 2027", "vetur 2027"
             (vetur 2026 er veturin í enda av 2026, desember–februar)
             Tú kanst eisini skriva "fyrst í 2027", ein mánað ("desember 2026") ella bert eitt ár ("2028").
   heiti     heitið á útgávuni
   slag      t.d. Pappírsbók, i-bók, sBók, Ljóðbók, Fakportalur, Snar  (kann vera tómt)
   fak       lærugrein og/ella flokkur  (kann vera tómt)
   stoda     Ætlað · Í skriving · Í umbróti · Til prentingar · Útkomin  (kann vera tómt)
   tekstur   ein stuttur tekstur  (kann vera tómur: "")
   meting    true, um útgávan bert er ein meting (ikki staðfest). Hon fær stippaðan prikk.

   ------------------------------------------------------------------ */


const UTGAVUR = [
  { tid: "vetur 2026", heiti: "Kom og rokna – 6 nýggjar bøkur", slag: "", fak: "Støddfrøði · forskúli og grunddeild", stoda: "",
    tekstur: "Seks nýggjar bøkur koma út í Kom og rokna-røðini í desember. Kom og rokna er roknitilfar til forskúlan og grunddeildina, skrivað av Johann Petersen." },
  { tid: "vetur 2026", heiti: "Støddfrøðispøl til Rokning 1", slag: "Snar", fak: "Støddfrøði · forskúli og 1. flokkur", stoda: "",
    tekstur: "Spøl til stóra skíggjan í flokkinum, eitt til hvønn kapittul í Rokning 1a og 1b. Flokkurin telur, roknar og kannar skap saman, og lærarin hevur eisini amboð sum terningar, tallinju og stoppur." },
  { tid: "vár 2027", heiti: "Co-teaching", slag: "sBók", fak: "Til lærarar", stoda: "",
    tekstur: "sBók um co-teaching, har tveir lærarar undirvísa saman í sama flokki. Bókin snýr seg um, hvussu fólkaskúlin kann gerast meira inkluderandi, og hon viðger leiklutin hjá sernámsfrøðini, fortreytirnar fyri góðum samstarvi, undirvísingardifferentiering, fyrireiking, undirvísingarskipanir og eftirmeting. Væntandi á vári 2027." },
  { tid: "vár 2027", heiti: "Plantur til matna", slag: "Snar", fak: "Temasíða", stoda: "",
    tekstur: "Nýggj temasíða á Snar. Væntandi tíðliga á vári 2027." },
  { tid: "heyst 2027", heiti: "Jarðfríða", slag: "Snar", fak: "Náttúra og tøkni · 3.–5. flokkur", stoda: "",
    tekstur: "Temað Jarðfrøði við Jarðfríðu. Næmingarnir fylgja jarðfrøðinginum Jarðfríðu og læra at lesa søguna, sum stendur skrivað í grótinum. Gjørt í samstarvi millum Nám og Jarðfeingi, og kann brúkast saman við GeoSkúla. Væntandi út ímóti heysti 2027." },

  /* ---- METINGAR: konkret nýtt tilfar, sum Nám ikki hevur kunngjørt enn ---- */
  { tid: "summar 2027", meting: true, heiti: "Enskt 5", slag: "Pappírsbók", fak: "Enskt · 5. flokkur", stoda: "",
    tekstur: "Enskt 4 kom út summarið 2025 sum fyrsta bók í nýggjari røð. Søga 4, 5 og 6 komu eisini út ein flokk í senn, so Enskt 5 er ein sannlík næsta bók." },
  { tid: "summar 2027", meting: true, heiti: "Ferð á føroyskt 2 – 4. kapittul", slag: "Pappírsbók", fak: "Føroyskt sum annaðmál", stoda: "",
    tekstur: "Í 2024 skrivaði Nám, at 4. kapittul í Ferð á føroyskt 2 er ávegis. Hann er ikki komin út enn." }
];
