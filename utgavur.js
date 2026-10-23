/* ------------------------------------------------------------------
   ÚTGÁVUR ÁVEGIS  –  rætta her
   ------------------------------------------------------------------
   Hvør útgáva er ein linja { ... }. Tú kanst rætta, leggja aftrat
   ella strika. Røðin skiftir ikki: tíðarlinjan raðar sjálv eftir dato.

   dato      "ÁÁÁÁ-MM" (t.d. "2027-03") ella "ÁÁÁÁ-MM-DD"
   heiti     heitið á útgávuni
   slag      t.d. Pappírsbók, i-bók, sBók, Ljóðbók, Fakportalur, Snar
   fak       lærugrein og/ella flokkur
   stoda     Ætlað · Í skriving · Í umbróti · Til prentingar · Útkomin
   tekstur   ein stuttur tekstur (kann vera tómur: "")

   Hetta eru DØMI. Skift tey út við tykkara egnu útgávur.
   ------------------------------------------------------------------ */

const UNDIRHEITI = "Útgávur ávegis frá Námi";

const UTGAVUR = [
  { dato: "2026-09", heiti: "Dømi: Lesibók 2", slag: "Pappírsbók", fak: "Føroyskt · 2. flokkur", stoda: "Útkomin",
    tekstur: "Lesibók við søgum og yrkingum, og eitt arbeiðshefti afturat." },
  { dato: "2026-11", heiti: "Dømi: Rokning 2A", slag: "Pappírsbók", fak: "Støddfrøði · 2. flokkur", stoda: "Til prentingar",
    tekstur: "Uppgávubók við lærarabók á netinum." },
  { dato: "2026-12", heiti: "Dømi: Jól í Føroyum", slag: "Snar", fak: "Tvørfakligt · 1.–4. flokkur", stoda: "Í umbróti",
    tekstur: "Temasíða við hugskotum, sangum og uppgávum til desember." },
  { dato: "2027-01", heiti: "Dømi: Náttúra og tøkni 5", slag: "i-bók", fak: "Náttúra og tøkni · 5. flokkur", stoda: "Í umbróti",
    tekstur: "Talgild bókaheild við filmum, uppgávum og upplestri." },
  { dato: "2027-03", heiti: "Dømi: Søga 7", slag: "sBók", fak: "Søga · 7. flokkur", stoda: "Í skriving",
    tekstur: "Frá landnámi til siðaskiftið, við tíðarlinjum og keldum." },
  { dato: "2027-05", heiti: "Dømi: Upplisnar søgur", slag: "Ljóðbók", fak: "Føroyskt · 3.–6. flokkur", stoda: "Í skriving",
    tekstur: "Søgur lisnar upp til lurtan og lesistuðul." },
  { dato: "2027-08", heiti: "Dømi: Enskt 4", slag: "Fakportalur", fak: "Enskt · 4. flokkur", stoda: "Ætlað",
    tekstur: "" }
];
