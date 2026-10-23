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

   Útgávur, sum byrja við "Dømi:", eru bert dømi. Skift tær út ella strika tær.
   ------------------------------------------------------------------ */

const UNDIRHEITI = "Útgávur ávegis frá Námi";

const UTGAVUR = [
  { tid: "heyst 2026", heiti: "Dømi: Lesibók 2", slag: "Pappírsbók", fak: "Føroyskt · 2. flokkur", stoda: "Útkomin",
    tekstur: "Lesibók við søgum og yrkingum, og eitt arbeiðshefti afturat." },
  { tid: "heyst 2026", heiti: "Dømi: Lesibók 3", slag: "Pappírsbók", fak: "Føroyskt · 3. flokkur", stoda: "Til prentingar",
    tekstur: "Lesibók við arbeiðshefti og lærarabók á netinum." },
  { tid: "vetur 2026", heiti: "Rokning – 6 nýggjar bøkur", slag: "Pappírsbók", fak: "Støddfrøði · fólkaskúlin", stoda: "",
    tekstur: "Seks nýggjar bøkur koma út í Rokning-røðini í desember. Rokning er bókaheild til støddfrøði í fólkaskúlanum, og røðin fevnir higartil um Rokning 1 til Rokning 6." },
  { tid: "vetur 2026", heiti: "Dømi: Jól í Føroyum", slag: "Snar", fak: "Tvørfakligt · 1.–4. flokkur", stoda: "Í umbróti",
    tekstur: "Temasíða við hugskotum, sangum og uppgávum til desember." },
  { tid: "vár 2027", heiti: "Dømi: Náttúra og tøkni 5", slag: "i-bók", fak: "Náttúra og tøkni · 5. flokkur", stoda: "Í umbróti",
    tekstur: "Talgild bókaheild við filmum, uppgávum og upplestri." },
  { tid: "vár 2027", heiti: "Dømi: Søga 7", slag: "sBók", fak: "Søga · 7. flokkur", stoda: "Í skriving",
    tekstur: "Frá landnámi til siðaskiftið, við tíðarlinjum og keldum." },
  { tid: "summar 2027", heiti: "Dømi: Upplisnar søgur", slag: "Ljóðbók", fak: "Føroyskt · 3.–6. flokkur", stoda: "Í skriving",
    tekstur: "Søgur lisnar upp til lurtan og lesistuðul." },
  { tid: "heyst 2027", heiti: "Jarðfríða", slag: "", fak: "", stoda: "",
    tekstur: "Væntandi út ímóti heysti 2027." },
  { tid: "heyst 2027", heiti: "Dømi: Enskt 4", slag: "Fakportalur", fak: "Enskt · 4. flokkur", stoda: "Ætlað",
    tekstur: "" }
];
