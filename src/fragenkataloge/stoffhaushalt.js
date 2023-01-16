const stoffhaushalt = [
  {
    title: "Aufgabe 1",
    questions: [
      {
        subtitle:
          "a) Aus welchen Komponenten besteht die Gesamtdeposition eines Waldes? Bitte geben Sie die Formel an. [4 Punkte]",
        solution: `Die Gesamtdeposition eines Bestandes setzt sich aus allen Komponenten der Nass-/Trocken-/
        und der Feuchtdeposition zusammen (Nebel, Wolkentröpfchen).
        GDx = BDnass.x + IDpart.x + IDgasf.x
        BDnass.x = FD`,
      },
      {
        subtitle:
          "b) Wie kann man die Gesamtdeposition eines Waldes messen? [2 Punkte]",
        solution: `Für die Ermittlung der Gesamtdeposition müssen alle Komponenten der nassen, trockenen
      und der feuchten Deposition (Nebel- und Wolkentröpfchen) berücksichtigt werden. Messen
      kann man dies mit Depositionssammlern, durch aufwendige Rechenmodelle und genügend
      vielen Stichproben, kann man damit auf die Gesamtdeposition eines Bestandes schließen.`,
      },
      {
        subtitle: `c) Was ist der Natrium-Kalibrierungsansatz und warum wendet man diesen Ansatz an? [3
        Punkte]`,
        solution: `Der Natriumkalibirierungsansatz ist ein Modell, welches unter der Annahme, dass Natrium
        sich im Kronenbereich inert verhält, nur in partikulärer Form und nicht gasförmig vorliegt
        (Natriumkonzentration im Nebel entspricht der Natriumkonzentration im Niederschlag) und
        sich andere Elemente ebenfalls wie Natrium verhalten, funktioniert. Man muss nun nur die
        Freiland-, sowie Bestandesdeposition ermitteln, um durch deren Differenz die
        Trockendeposition oder Interzeptionsdepositon abzuleiten. Stellt man diese nun zum
        Verhältnis zur Freilanddeposition, kann man damit den Natrium-Faktor berechnen. Dieser
        gibt an in welchem Verhältnis die partikuläre Deposition von Natrium im Bestand, verglichen
        mit der Deposition im Freiland zugenommen hat. Durch die Annahme, dass sich die anderen
        Elemente ebenfalls wie Natrium verhalten, kann man nun mit dem Natriumfaktor die
        Interzeptionsdeposition für die anderer Partikel berechnen. Der Natriumkalibrierungsansatz,
        dient der vereinfachten Modellierung von Depositionsvorgängen im Bestand, ohne
        Kostenspielige Messmethoden und Rechnungsprogrammen.`,
      },
      {
        subtitle: `d) Welche Annahmen werden bei der Anwendung des Natrium-Kalibrierungsansatzes
      getroffen? [3 Punkte]`,
        solution: `Dass Natrium sich im Kronenbereich inert verhält, nur in partikulärer Form und nicht
      gasförmig vorliegt (Natriumkonzentration im Nebel entspricht der Natriumkonzentration im
      Niederschlag) und sich andere Elemente ebenso wie Natrium verhalten.`,
      },
    ],
  },
  {
    title: "Aufgabe 2",
    questions: [
      {
        subtitle: `a) Was ist der Unterschied zwischen Mikronährelementen und Schwermetallen? Bitte geben
        Sie für beide Gruppen zwei Beispiele an. [14 Punkte]`,
        solution: `Mikronährelemente (Spurenelemente) sind für die Ernährung der Pflanze essentiell. Dürfen
        jedoch nur in geringen Mengen/Spuren vorhanden sein, da sie in zu hoher Konzentration
        toxisch wirken können (optimale Versorgung). Außerdem werden Mikronährelemente in der
        Pflanze verbraucht. Schwermetalle hingegen lagern sich in der Pflanze ab und reichern
        sich an, nehmen keine biologische Funktion in der Pflanze ein und werden schon in geringen
        Mengen toxisch wirkend (ähnlich reinen Giftstoffen)
        MN: Fe,Mn,Zn,Cu
        SM: Pb, Cd, Cr, Hg, As`,
      },
      {
        subtitle: `b) In einem Fichtenbestand stellen Sie folgende Mangelerscheinungen fest: junge Nadeln sind
        gelb bis weißlich, ältere Nadeln jedoch grün. Welches Mikronährelement fehlt mit großer
        Wahrscheinlichkeit diesen Fichten? Geben Sie ein Beispiel von einem Standort, an dem diese
        Mangelerscheinungen auftreten könnten und erklären Sie warum. [ 4 Punkte]`,
        solution: `Eisenmangel-> junge Nadeln hellgrün/gelb bis weißlich, ältere bleiben grün
        Diese Mangelerscheinung tritt vermehrt auf Eisenarmen Substraten wie Hochmooren auf,
        oder auf Böden die zwar einen hohen Eisengehalt aufweisen, welcher bedingt durch den
        hohen pH-Wert jedoch nicht pflanzenverfügbar ist (karbonathaltige Böden). Eisen ist in
        Pflanzen immobil. Daher ist es nicht möglich Eisen in die jüngeren Nadeln zu transportieren,
        sondern Fe muss neu aufgenommen werden.`,
      },
    ],
  },
];

export default stoffhaushalt;
