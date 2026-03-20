/* ════════════════════════════════════════════
   SideQuestCommunity – i18n.js
   Deutsch / English language switcher
   Requires: main.js loaded first
   ════════════════════════════════════════════ */

const TRANSLATIONS = {

  /* ── Navbar ─────────────────────────────────── */
  nav_home:        { de: 'Startseite',     en: 'Home' },
  nav_server:      { de: 'Server',         en: 'Server' },
  nav_overview:    { de: '📋 Übersicht',   en: '📋 Overview' },
  dd_coming:       { de: 'bald',           en: 'soon' },

  /* ── Shared UI labels ───────────────────────── */
  tut_next_label:  { de: 'NÄCHSTES TUTORIAL',     en: 'NEXT TUTORIAL' },
  tut_learned_h:   { de: '✔ Das hast du gelernt', en: '✔ What you learned' },
  tut_final_hdr:   { de: '★ ABSCHLUSSPROGRAMM – ', en: '★ FINAL PROJECT – ' },
  label_concept:   { de: 'KONZEPT',        en: 'CONCEPT' },
  label_prereq:    { de: 'VORAUSSETZUNGEN',en: 'PREREQUISITES' },
  label_example:   { de: 'BEISPIEL',       en: 'EXAMPLE' },
  label_example1:  { de: 'BEISPIEL 1',     en: 'EXAMPLE 1' },
  label_example2:  { de: 'BEISPIEL 2',     en: 'EXAMPLE 2' },
  label_bonus:     { de: 'BONUS',          en: 'BONUS' },
  label_run:       { de: 'AUSFÜHREN',      en: 'RUN IT' },
  label_numbers:   { de: 'ZAHLEN',         en: 'NUMBERS' },
  label_datatypes: { de: 'DATENTYPEN',     en: 'DATA TYPES' },
  label_recap:     { de: 'RECAP',          en: 'RECAP' },
  label_concat:    { de: 'STRING-VERKETTUNG', en: 'STRING CONCAT' },
  label_math:      { de: 'RECHNEN',        en: 'MATH' },
  label_numtext:   { de: 'ZAHLEN + TEXT',  en: 'NUMBERS + TEXT' },
  label_compare:   { de: 'VERGLEICHSOPERATOREN', en: 'COMPARISON OPS' },
  label_elseif:    { de: 'ELSEIF',         en: 'ELSEIF' },
  label_logicops:  { de: 'LOGISCHE OPERATOREN', en: 'LOGICAL OPERATORS' },
  label_truthtbl:  { de: 'WAHRHEITSTABELLE', en: 'TRUTH TABLE' },
  label_infinite:  { de: 'ENDLOSSCHLEIFE', en: 'INFINITE LOOP' },
  label_events:    { de: 'HÄUFIGE EVENTS', en: 'COMMON EVENTS' },
  label_keyboard:  { de: 'PART A · TASTATUR-EVENTS', en: 'PART A · KEYBOARD EVENTS' },
  label_mouse:     { de: 'PART B · MAUS-EVENTS',     en: 'PART B · MOUSE EVENTS' },
  label_timer:     { de: 'PART C · TIMER-EVENTS',    en: 'PART C · TIMER EVENTS' },
  label_send:      { de: 'PART A · SENDEN & EMPFANGEN', en: 'PART A · SEND & RECEIVE' },
  label_broadcast: { de: 'PART B · BROADCAST',       en: 'PART B · BROADCAST' },
  label_protocol:  { de: 'PART C · PROTOKOLLE',      en: 'PART C · PROTOCOLS' },
  label_automod:   { de: 'PART D · MODEM AUTO-ERKENNUNG', en: 'PART D · MODEM AUTO-DETECT' },
  label_array:     { de: 'PART A · ARRAY (LISTE)',   en: 'PART A · ARRAY (LIST)' },
  label_keyval:    { de: 'PART B · KEY-VALUE (DICTIONARY)', en: 'PART B · KEY-VALUE (DICTIONARY)' },
  label_nested:    { de: 'PART C · TABELLEN VERSCHACHTELN', en: 'PART C · NESTED TABLES' },
  label_colors:    { de: 'PART A · FARBEN',          en: 'PART A · COLORS' },
  label_paintfns:  { de: 'PART B · PAINTUTILS FUNKTIONEN', en: 'PART B · PAINTUTILS FUNCTIONS' },
  label_termapi:   { de: 'PART C · TERM API',        en: 'PART C · TERM API' },
  label_gui:       { de: 'PART D · GUI BAUEN',       en: 'PART D · BUILD GUI' },
  label_palette:   { de: 'FARBPALETTE',              en: 'COLOR PALETTE' },
  label_rednet:    { de: 'REDNET API',               en: 'REDNET API' },
  label_boolpart:  { de: 'PART A · BOOLEANS',        en: 'PART A · BOOLEANS' },
  label_whilepart: { de: 'PART B · WHILE-SCHLEIFE',  en: 'PART B · WHILE LOOP' },
  label_forpart:   { de: 'PART C · FOR-SCHLEIFE',    en: 'PART C · FOR LOOP' },

  /* ════════ PART 1 – Hello World ════════ */
  p1_ep:           { de: '▶ Episode 01',   en: '▶ Episode 01' },
  p1_title:        { de: 'Hello, World!',  en: 'Hello, World!' },
  p1_sub:          { de: 'Dein erstes Lua-Programm im CraftOS-Terminal', en: 'Your first Lua program in the CraftOS terminal' },
  p1_prereq_h:     { de: 'Was brauchst du?', en: 'What do you need?' },
  p1_prereq_1:     { de: 'Einen Computer oder Turtle aus dem CC: Tweaked Mod', en: 'A Computer or Turtle from the CC: Tweaked mod' },
  p1_prereq_2:     { de: 'Das Rechtsklick-Menü öffnen → CraftOS-Terminal erscheint', en: 'Right-click to open → CraftOS terminal appears' },
  p1_prereq_3:     { de: 'Keine weiteren Mods oder Tools nötig', en: 'No additional mods or tools required' },
  p1_steps_h:      { de: 'Schritt für Schritt', en: 'Step by Step' },
  p1_step1:        { de: 'Platziere einen <strong style="color:#f2b233">Computer</strong> in der Welt und klicke ihn mit Rechtsklick an. Das CraftOS-Terminal öffnet sich.', en: 'Place a <strong style="color:#f2b233">Computer</strong> in the world and right-click it. The CraftOS terminal opens.' },
  p1_step2:        { de: 'Erstelle eine neue Datei mit dem <span class="inline-code">edit</span>-Befehl:', en: 'Create a new file using the <span class="inline-code">edit</span> command:' },
  p1_tip:          { de: 'Im Editor speicherst du mit <strong style="color:#4fc3f7">Strg</strong> → dann <strong style="color:#4fc3f7">Save</strong> wählen → anschließend <strong style="color:#4fc3f7">Exit</strong>. Die Datei heißt dann automatisch <code style="color:#f2b233">hello</code> (ohne Endung, das ist normal in CraftOS).', en: 'In the editor, save with <strong style="color:#4fc3f7">Ctrl</strong> → select <strong style="color:#4fc3f7">Save</strong> → then <strong style="color:#4fc3f7">Exit</strong>. The file is named <code style="color:#f2b233">hello</code> automatically (no extension, that\'s normal in CraftOS).' },
  p1_run_h:        { de: 'Programm starten', en: 'Run the program' },
  p1_step3:        { de: 'Zurück im Terminal tippst du einfach den Dateinamen ein und drückst <strong style="color:#f2b233">Enter</strong>:', en: 'Back in the terminal, type the filename and press <strong style="color:#f2b233">Enter</strong>:' },
  p1_bonus_h:      { de: 'Direkt in die Shell – ohne Datei', en: 'Directly in the shell – no file needed' },
  p1_bonus_p:      { de: 'Du kannst Lua-Code auch direkt im Terminal ausführen, ohne eine Datei zu erstellen:', en: 'You can also run Lua code directly in the terminal without creating a file:' },
  p1_learned_1:    { de: 'Wie du den eingebauten <strong style="color:#f2b233">edit</strong>-Editor öffnest', en: 'How to open the built-in <strong style="color:#f2b233">edit</strong> editor' },
  p1_learned_2:    { de: 'Die Funktion <strong style="color:#4fc3f7">print()</strong> gibt Text ins Terminal aus', en: 'The <strong style="color:#4fc3f7">print()</strong> function outputs text to the terminal' },
  p1_learned_3:    { de: 'Strings werden in <strong style="color:#57a64e">"..."</strong> oder <strong style="color:#57a64e">\'...\'</strong> eingeschlossen', en: 'Strings are wrapped in <strong style="color:#57a64e">"..."</strong> or <strong style="color:#57a64e">\'...\'</strong>' },
  p1_learned_4:    { de: 'Wie du ein Lua-Skript in CraftOS speicherst und ausführst', en: 'How to save and run a Lua script in CraftOS' },
  p1_learned_5:    { de: 'Die interaktive Lua-Shell als schnelles Test-Werkzeug', en: 'The interactive Lua shell as a quick testing tool' },
  p1_next:         { de: 'Teil 2 → Variablen', en: 'Part 2 → Variables' },

  /* ════════ PART 2 – Variablen ════════ */
  p2_ep:           { de: '▶ Episode 02',   en: '▶ Episode 02' },
  p2_title:        { de: 'Variablen',      en: 'Variables' },
  p2_sub:          { de: 'Daten speichern und in print() verwenden', en: 'Storing data and using it in print()' },
  p2_concept_h:    { de: 'Was ist eine Variable?', en: 'What is a variable?' },
  p2_concept_p:    { de: 'Eine Variable ist wie eine <strong style="color:#f2b233">beschriftete Kiste</strong> – du legst einen Wert hinein und kannst ihn später über den Namen wieder abrufen. In Lua erstellst du eine Variable einfach mit <span class="inline-code">local</span>:', en: 'A variable is like a <strong style="color:#f2b233">labeled box</strong> – you put a value in it and can retrieve it later by name. In Lua you create a variable simply with <span class="inline-code">local</span>:' },
  p2_types_h:      { de: 'Die wichtigsten Typen in Lua', en: 'The most important types in Lua' },
  p2_example_h:    { de: 'Hello World – mit Variable', en: 'Hello World – with a variable' },
  p2_example_p:    { de: 'Statt den Text direkt in <span class="inline-code">print()</span> zu schreiben, speichern wir ihn zuerst in einer Variable:', en: 'Instead of writing the text directly into <span class="inline-code">print()</span>, we first store it in a variable:' },
  p2_numbers_h:    { de: 'Variablen mit Zahlen', en: 'Variables with numbers' },
  p2_numbers_p:    { de: 'Zahlen brauchen <strong style="color:#f2b233">keine</strong> Anführungszeichen. Du kannst mit ihnen auch direkt rechnen:', en: 'Numbers do <strong style="color:#f2b233">not</strong> need quotation marks. You can also do math with them directly:' },
  p2_warn:         { de: 'Schreib <strong style="color:#f2b233">immer</strong> <span class="inline-code">local</span> vor deine Variablen! Ohne <span class="inline-code">local</span> wird die Variable global – das kann in größeren Programmen zu schwer findbaren Fehlern führen.', en: '<strong style="color:#f2b233">Always</strong> write <span class="inline-code">local</span> before your variables! Without <span class="inline-code">local</span> the variable becomes global – this can cause hard-to-find bugs in larger programs.' },
  p2_learned_1:    { de: 'Was eine Variable ist und wozu sie dient', en: 'What a variable is and what it is used for' },
  p2_learned_2:    { de: 'Wie du mit <strong style="color:#f2b233">local</strong> eine Variable erstellst', en: 'How to create a variable with <strong style="color:#f2b233">local</strong>' },
  p2_learned_3:    { de: 'Den Unterschied zwischen <strong style="color:#57a64e">strings</strong> (Text) und <strong style="color:#d87f33">numbers</strong> (Zahlen)', en: 'The difference between <strong style="color:#57a64e">strings</strong> (text) and <strong style="color:#d87f33">numbers</strong>' },
  p2_learned_4:    { de: 'Eine Variable direkt an <strong style="color:#4fc3f7">print()</strong> übergeben', en: 'Passing a variable directly to <strong style="color:#4fc3f7">print()</strong>' },
  p2_learned_5:    { de: 'Warum <strong style="color:#f2b233">local</strong> fast immer die richtige Wahl ist', en: 'Why <strong style="color:#f2b233">local</strong> is almost always the right choice' },
  p2_next:         { de: 'Teil 3 → Variablen kombinieren', en: 'Part 3 → Combining Variables' },

  /* ════════ PART 3 – Kombinieren ════════ */
  p3_ep:           { de: '▶ Episode 03',  en: '▶ Episode 03' },
  p3_title:        { de: 'Variablen kombinieren', en: 'Combining Variables' },
  p3_sub:          { de: 'Strings zusammenführen · Rechnen · Fertige Ausgaben bauen', en: 'Concatenation · Math · Building output strings' },
  p3_recap_h:      { de: 'Wo wir stehen', en: 'Where we are' },
  p3_recap_p:      { de: 'In Teil 2 hast du gelernt, wie man Text und Zahlen in Variablen speichert. Jetzt gehen wir einen Schritt weiter: Wir <strong style="color:#f2b233">verbinden</strong> mehrere Variablen zu einer einzigen Ausgabe.', en: 'In Part 2 you learned how to store text and numbers in variables. Now we go one step further: we <strong style="color:#f2b233">combine</strong> multiple variables into a single output.' },
  p3_concat_h:     { de: 'Strings verbinden mit <span style="color:#ff6b6b">..</span>', en: 'Connecting strings with <span style="color:#ff6b6b">..</span>' },
  p3_concat_p:     { de: 'In Lua verbindest du zwei Strings mit dem <strong style="color:#ff6b6b">..</strong> Operator (zwei Punkte). Das nennt sich <em>Konkatenation</em>.', en: 'In Lua you connect two strings with the <strong style="color:#ff6b6b">..</strong> operator (two dots). This is called <em>concatenation</em>.' },
  p3_tip:          { de: 'Das Leerzeichen <span class="inline-code">" "</span> ist selbst ein String – ohne ihn würde <strong style="color:#f2b233">SteveMinecraft</strong> ausgegeben. Denk immer daran, Leerzeichen explizit hinzuzufügen!', en: 'The space <span class="inline-code">" "</span> is itself a string – without it <strong style="color:#f2b233">SteveMinecraft</strong> would be printed. Always remember to add spaces explicitly!' },
  p3_numtext_h:    { de: 'Zahlen mit Text kombinieren', en: 'Combining numbers with text' },
  p3_numtext_p:    { de: 'Wenn du eine Zahl mit einem String verbindest, wandelt Lua die Zahl automatisch in Text um – du musst nichts extra tun:', en: 'When you combine a number with a string, Lua automatically converts the number to text – you don\'t need to do anything extra:' },
  p3_math_h:       { de: 'Mit Zahlen rechnen', en: 'Math with numbers' },
  p3_math_p:       { de: 'Zahlen-Variablen lassen sich direkt verrechnen. Das Ergebnis kannst du in einer neuen Variable speichern oder direkt ausgeben:', en: 'Number variables can be used in calculations directly. You can store the result in a new variable or output it directly:' },
  p3_warn:         { de: 'Beim Verbinden von Rechenergebnis und Text brauchst du <strong style="color:#f2b233">Klammern</strong> um die Rechnung: <span class="inline-code">print("X: " .. (a + b))</span> — ohne Klammern kann Lua den <span class="inline-code">..</span> falsch interpretieren.', en: 'When combining a calculation result with text you need <strong style="color:#f2b233">parentheses</strong> around the calculation: <span class="inline-code">print("X: " .. (a + b))</span> — without them Lua may misinterpret the <span class="inline-code">..</span> operator.' },
  p3_learned_1:    { de: 'Strings mit <strong style="color:#ff6b6b">..</strong> verbinden (Konkatenation)', en: 'Connecting strings with <strong style="color:#ff6b6b">..</strong> (concatenation)' },
  p3_learned_2:    { de: 'Leerzeichen als eigenen String <strong style="color:#57a64e">" "</strong> einfügen', en: 'Adding spaces as their own string <strong style="color:#57a64e">" "</strong>' },
  p3_learned_3:    { de: 'Zahlen und Text direkt kombinieren', en: 'Combining numbers and text directly' },
  p3_learned_4:    { de: 'Rechenoperatoren: <strong style="color:#ff6b6b">+ - * / % ^</strong>', en: 'Math operators: <strong style="color:#ff6b6b">+ - * / % ^</strong>' },
  p3_learned_5:    { de: 'Zwischenergebnisse in Variablen speichern und weiterverwenden', en: 'Storing intermediate results in variables and reusing them' },
  p3_learned_6:    { de: 'Klammern bei Rechenoperationen im <strong style="color:#ff6b6b">..</strong> Ausdruck', en: 'Parentheses for calculations inside <strong style="color:#ff6b6b">..</strong> expressions' },
  p3_next:         { de: 'Teil 4 → if / else', en: 'Part 4 → if / else' },

  /* ════════ PART 4 – if/else ════════ */
  p4_ep:           { de: '▶ Episode 04',  en: '▶ Episode 04' },
  p4_title:        { de: 'if / else',     en: 'if / else' },
  p4_sub:          { de: 'Entscheidungen treffen – dein Programm denkt mit', en: 'Making decisions – your program thinks ahead' },
  p4_concept_h:    { de: 'Was ist if/else?', en: 'What is if/else?' },
  p4_concept_p:    { de: 'Mit <strong style="color:var(--cc-purple)">if</strong> kannst du deinem Programm sagen: <em>"Wenn diese Bedingung wahr ist, mach X – sonst mach Y."</em> Das ist die Grundlage für jede Logik in Lua.', en: 'With <strong style="color:var(--cc-purple)">if</strong> you can tell your program: <em>"If this condition is true, do X – otherwise do Y."</em> This is the foundation of all logic in Lua.' },
  p4_tip:          { de: 'In Lua braucht jedes <span class="inline-code">if</span> ein <span class="inline-code">end</span> am Schluss – vergisst du es, gibt es einen Fehler. Der <span class="inline-code">else</span>-Block ist optional.', en: 'In Lua every <span class="inline-code">if</span> needs an <span class="inline-code">end</span> at the end – forgetting it causes an error. The <span class="inline-code">else</span> block is optional.' },
  p4_compare_h:    { de: 'Bedingungen formulieren', en: 'Formulating conditions' },
  p4_ex1_h:        { de: 'Einfaches if/else', en: 'Simple if/else' },
  p4_ex1_p:        { de: 'Wir prüfen ob ein Spieler genug XP für ein Level-Up hat:', en: 'We check whether a player has enough XP for a level-up:' },
  p4_ex2_h:        { de: 'if ohne else', en: 'if without else' },
  p4_ex2_p:        { de: 'Der <span class="inline-code">else</span>-Block ist optional. Manchmal willst du nur auf eine Bedingung reagieren und sonst gar nichts tun:', en: 'The <span class="inline-code">else</span> block is optional. Sometimes you only want to react to one condition and do nothing otherwise:' },
  p4_warn:         { de: '<strong style="color:var(--cc-yellow)">=</strong> ist Zuweisung (<span class="inline-code">local x = 5</span>).<br><strong style="color:var(--cc-yellow)">==</strong> ist Vergleich (<span class="inline-code">if x == 5 then</span>).<br>Das ist einer der häufigsten Anfängerfehler!', en: '<strong style="color:var(--cc-yellow)">=</strong> is assignment (<span class="inline-code">local x = 5</span>).<br><strong style="color:var(--cc-yellow)">==</strong> is comparison (<span class="inline-code">if x == 5 then</span>).<br>This is one of the most common beginner mistakes!' },
  p4_learned_1:    { de: 'Aufbau von <strong style="color:var(--cc-purple)">if / else / end</strong>', en: 'Structure of <strong style="color:var(--cc-purple)">if / else / end</strong>' },
  p4_learned_2:    { de: 'Vergleichsoperatoren: <strong style="color:#ff6b6b">== ~= &lt; &gt; &lt;= &gt;=</strong>', en: 'Comparison operators: <strong style="color:#ff6b6b">== ~= &lt; &gt; &lt;= &gt;=</strong>' },
  p4_learned_3:    { de: 'Unterschied zwischen <strong style="color:#ff6b6b">=</strong> (Zuweisung) und <strong style="color:#ff6b6b">==</strong> (Vergleich)', en: 'Difference between <strong style="color:#ff6b6b">=</strong> (assignment) and <strong style="color:#ff6b6b">==</strong> (comparison)' },
  p4_learned_4:    { de: '<span class="inline-code">else</span> ist optional – <span class="inline-code">end</span> nie!', en: '<span class="inline-code">else</span> is optional – <span class="inline-code">end</span> never is!' },
  p4_learned_5:    { de: 'Mehrere unabhängige <span class="inline-code">if</span>-Blöcke nacheinander verwenden', en: 'Using multiple independent <span class="inline-code">if</span> blocks in sequence' },
  p4_next:         { de: 'Teil 5 → elseif · and · or · not', en: 'Part 5 → elseif · and · or · not' },

  /* ════════ PART 5 – elseif/and/or ════════ */
  p5_ep:           { de: '▶ Episode 05',  en: '▶ Episode 05' },
  p5_title:        { de: 'elseif · and · or · not', en: 'elseif · and · or · not' },
  p5_sub:          { de: 'Mehrere Bedingungen · Logische Operatoren · Komplexe Entscheidungen', en: 'Multiple conditions · Logical operators · Complex decisions' },
  p5_elseif_h:     { de: 'Mehrere Fälle mit elseif', en: 'Multiple cases with elseif' },
  p5_elseif_p:     { de: 'In Teil 4 hattest du nur zwei Möglichkeiten: wahr oder falsch. Mit <strong style="color:var(--cc-purple)">elseif</strong> kannst du beliebig viele Fälle abdecken – Lua prüft sie der Reihe nach und führt den ersten passenden Block aus.', en: 'In Part 4 you only had two options: true or false. With <strong style="color:var(--cc-purple)">elseif</strong> you can cover any number of cases – Lua checks them in order and executes the first matching block.' },
  p5_tip:          { de: 'Lua prüft von <strong style="color:var(--cc-yellow)">oben nach unten</strong> und stoppt beim ersten passenden Block. Deshalb fängst du immer mit dem <strong style="color:var(--cc-yellow)">strengsten</strong> Fall an – hier &gt;= 1000 vor &gt;= 800.', en: 'Lua checks from <strong style="color:var(--cc-yellow)">top to bottom</strong> and stops at the first matching block. That\'s why you always start with the <strong style="color:var(--cc-yellow)">strictest</strong> case – here &gt;= 1000 before &gt;= 800.' },
  p5_logic_h:      { de: 'and · or · not', en: 'and · or · not' },
  p5_logic_p:      { de: 'Mit logischen Operatoren kannst du mehrere Bedingungen in einem <span class="inline-code">if</span> kombinieren:', en: 'With logical operators you can combine multiple conditions in one <span class="inline-code">if</span>:' },
  p5_truth_h:      { de: 'Übersicht: and / or / not', en: 'Overview: and / or / not' },
  p5_learned_1:    { de: '<strong style="color:var(--cc-purple)">elseif</strong> für mehrere aufeinanderfolgende Fälle', en: '<strong style="color:var(--cc-purple)">elseif</strong> for multiple consecutive cases' },
  p5_learned_2:    { de: 'Lua prüft <strong style="color:var(--cc-yellow)">von oben nach unten</strong> – Reihenfolge ist wichtig!', en: 'Lua checks <strong style="color:var(--cc-yellow)">top to bottom</strong> – order matters!' },
  p5_learned_3:    { de: '<strong style="color:var(--cc-green)">and</strong> – beide Bedingungen müssen wahr sein', en: '<strong style="color:var(--cc-green)">and</strong> – both conditions must be true' },
  p5_learned_4:    { de: '<strong style="color:var(--cc-cyan)">or</strong> – mindestens eine muss wahr sein', en: '<strong style="color:var(--cc-cyan)">or</strong> – at least one must be true' },
  p5_learned_5:    { de: '<strong style="color:var(--cc-red)">not</strong> – kehrt den Wahrheitswert um', en: '<strong style="color:var(--cc-red)">not</strong> – inverts the boolean value' },
  p5_learned_6:    { de: 'Komplexe Bedingungen aus einfachen zusammenbauen', en: 'Building complex conditions from simple ones' },
  p5_next:         { de: 'Teil 6 → Booleans & Schleifen', en: 'Part 6 → Booleans & Loops' },

  /* ════════ PART 6 – Booleans & Loops ════════ */
  p6_ep:           { de: '▶ Episode 06',  en: '▶ Episode 06' },
  p6_title:        { de: 'Booleans & Schleifen', en: 'Booleans & Loops' },
  p6_sub:          { de: 'true / false als Schalter · while · for · break', en: 'true / false as switches · while · for · break' },
  p6_bool_h:       { de: 'Boolean – der einfachste Datentyp', en: 'Boolean – the simplest data type' },
  p6_bool_p:       { de: 'Ein Boolean kennt nur zwei Werte: <strong style="color:var(--cc-green)">true</strong> oder <strong style="color:var(--cc-red)">false</strong>. Du kennst ihn schon aus den if/else-Bedingungen – aber du kannst ihn auch direkt in Variablen speichern und als Schalter nutzen.', en: 'A Boolean only has two values: <strong style="color:var(--cc-green)">true</strong> or <strong style="color:var(--cc-red)">false</strong>. You already know it from if/else conditions – but you can also store it directly in variables and use it as a switch.' },
  p6_tip1:         { de: 'Willst du einen Boolean als Text ausgeben, brauchst du <span class="inline-code">tostring()</span> – sonst gibt Lua einen Fehler beim Versuch, ihn mit <span class="inline-code">..</span> zu verbinden.', en: 'To output a boolean as text, you need <span class="inline-code">tostring()</span> – otherwise Lua throws an error when trying to concatenate it with <span class="inline-code">..</span>.' },
  p6_while_h:      { de: 'while – solange wiederholen', en: 'while – repeat as long as' },
  p6_while_p:      { de: 'Eine <strong style="color:var(--cc-cyan)">while</strong>-Schleife läuft so lange, wie ihre Bedingung <strong style="color:var(--cc-green)">true</strong> ist. Das macht sie ideal für Schleifen, bei denen du die Anzahl der Durchläufe nicht vorher kennst – z.B. "warte bis der Reaktor kühl ist".', en: 'A <strong style="color:var(--cc-cyan)">while</strong> loop runs as long as its condition is <strong style="color:var(--cc-green)">true</strong>. This makes it ideal for loops where you don\'t know the number of iterations in advance – e.g. "wait until the reactor is cool".' },
  p6_infinite_h:   { de: 'while true – Die Endlosschleife', en: 'while true – The infinite loop' },
  p6_infinite_p:   { de: 'In CC: Tweaked ist <span class="inline-code">while true do</span> sehr häufig – sie lässt ein Programm dauerhaft laufen (z.B. ein Monitoring-Script). Mit <strong style="color:var(--cc-red)">break</strong> kannst du die Schleife jederzeit verlassen.', en: 'In CC: Tweaked <span class="inline-code">while true do</span> is very common – it keeps a program running indefinitely (e.g. a monitoring script). Use <strong style="color:var(--cc-red)">break</strong> to exit the loop at any time.' },
  p6_warn:         { de: '<strong style="color:var(--cc-yellow)">while true do</strong> ohne <span class="inline-code">break</span> läuft ewig! In CraftOS kannst du mit <strong style="color:var(--cc-yellow)">Strg+T</strong> ein laufendes Programm abbrechen.', en: '<strong style="color:var(--cc-yellow)">while true do</strong> without <span class="inline-code">break</span> runs forever! In CraftOS you can stop a running program with <strong style="color:var(--cc-yellow)">Ctrl+T</strong>.' },
  p6_for_h:        { de: 'for – genau N-mal wiederholen', en: 'for – repeat exactly N times' },
  p6_for_p:        { de: 'Die <strong style="color:var(--cc-green)">for</strong>-Schleife ist ideal wenn du genau weißt, wie oft etwas passieren soll. Sie zählt automatisch – du musst den Zähler nicht selbst erhöhen.', en: 'The <strong style="color:var(--cc-green)">for</strong> loop is ideal when you know exactly how many times something should happen. It counts automatically – you don\'t need to increment the counter yourself.' },
  p6_learned_1:    { de: '<strong style="color:var(--cc-purple)">Boolean</strong> – true / false direkt in Variablen speichern', en: '<strong style="color:var(--cc-purple)">Boolean</strong> – storing true / false directly in variables' },
  p6_learned_2:    { de: 'Boolean mit <strong style="color:var(--cc-purple)">not</strong> umschalten (toggle)', en: 'Toggling a boolean with <strong style="color:var(--cc-purple)">not</strong>' },
  p6_learned_3:    { de: '<strong style="color:var(--cc-cyan)">tostring()</strong> um Boolean als Text auszugeben', en: '<strong style="color:var(--cc-cyan)">tostring()</strong> to output a boolean as text' },
  p6_learned_4:    { de: '<strong style="color:var(--cc-cyan)">while</strong> – Schleife läuft solange Bedingung true', en: '<strong style="color:var(--cc-cyan)">while</strong> – loop runs while condition is true' },
  p6_learned_5:    { de: '<strong style="color:var(--cc-cyan)">while true do</strong> – Endlosschleife, stoppen mit <strong style="color:var(--cc-red)">break</strong>', en: '<strong style="color:var(--cc-cyan)">while true do</strong> – infinite loop, stop with <strong style="color:var(--cc-red)">break</strong>' },
  p6_learned_6:    { de: '<strong style="color:var(--cc-green)">for i = start, ende, schritt</strong> – Zählschleife', en: '<strong style="color:var(--cc-green)">for i = start, stop, step</strong> – counting loop' },
  p6_learned_7:    { de: 'Wann while vs. for die bessere Wahl ist', en: 'When to choose while vs. for' },
  p6_next:         { de: 'Teil 7 → Events', en: 'Part 7 → Events' },

  /* ════════ PART 7 – Events ════════ */
  p7_ep:           { de: '▶ Episode 07',  en: '▶ Episode 07' },
  p7_title:        { de: 'Events',        en: 'Events' },
  p7_sub:          { de: 'os.pullEvent · Tastatur · Maus · Timer', en: 'os.pullEvent · Keyboard · Mouse · Timer' },
  p7_concept_h:    { de: 'Was sind Events?', en: 'What are events?' },
  p7_concept_p:    { de: 'In CC: Tweaked passieren ständig Dinge – Tasten werden gedrückt, Redstone-Signale ändern sich, Timer laufen ab. All das sind <strong style="color:var(--cc-cyan)">Events</strong>. Mit <span class="inline-code">os.pullEvent()</span> wartet dein Programm auf das nächste Event und reagiert darauf.', en: 'In CC: Tweaked things are constantly happening – keys are pressed, redstone signals change, timers expire. All of these are <strong style="color:var(--cc-cyan)">Events</strong>. With <span class="inline-code">os.pullEvent()</span> your program waits for the next event and reacts to it.' },
  p7_events_h:     { de: 'Die wichtigsten Events', en: 'The most important events' },
  p7_tip:          { de: '<span class="inline-code">keys.q</span>, <span class="inline-code">keys.enter</span>, <span class="inline-code">keys.space</span> usw. sind vordefinierte Konstanten in CC: Tweaked. Mit <span class="inline-code">keys.getName(keyCode)</span> bekommst du den Namen als String zurück.', en: '<span class="inline-code">keys.q</span>, <span class="inline-code">keys.enter</span>, <span class="inline-code">keys.space</span> etc. are predefined constants in CC: Tweaked. Use <span class="inline-code">keys.getName(keyCode)</span> to get the name as a string.' },
  p7_tip2:         { de: 'Du kannst mehrere Timer gleichzeitig laufen lassen. Jeder bekommt eine eigene ID – deshalb vergleichst du <span class="inline-code">id == t</span>, um sicherzustellen dass es <em>dein</em> Timer war.', en: 'You can run multiple timers simultaneously. Each gets its own ID – that\'s why you compare <span class="inline-code">id == t</span> to make sure it was <em>your</em> timer.' },
  p7_learned_1:    { de: '<strong style="color:var(--cc-cyan)">os.pullEvent()</strong> – wartet auf Events, gibt Typ + Argumente zurück', en: '<strong style="color:var(--cc-cyan)">os.pullEvent()</strong> – waits for events, returns type + arguments' },
  p7_learned_2:    { de: '<strong style="color:var(--cc-cyan)">key</strong> Event + <span class="inline-code">keys.NAME</span> Konstanten', en: '<strong style="color:var(--cc-cyan)">key</strong> event + <span class="inline-code">keys.NAME</span> constants' },
  p7_learned_3:    { de: '<strong style="color:var(--cc-cyan)">mouse_click</strong> Event mit Button (1/2/3) und X/Y Position', en: '<strong style="color:var(--cc-cyan)">mouse_click</strong> event with button (1/2/3) and X/Y position' },
  p7_learned_4:    { de: '<strong style="color:var(--cc-cyan)">os.startTimer()</strong> + <span class="inline-code">timer</span> Event', en: '<strong style="color:var(--cc-cyan)">os.startTimer()</strong> + <span class="inline-code">timer</span> event' },
  p7_learned_5:    { de: 'Events in einer <span class="inline-code">while true</span> Schleife verarbeiten', en: 'Processing events in a <span class="inline-code">while true</span> loop' },
  p7_learned_6:    { de: 'Boolean als Schleifenschalter nutzen', en: 'Using a boolean as a loop switch' },
  p7_next:         { de: 'Teil 8 → rednet', en: 'Part 8 → rednet' },

  /* ════════ PART 8 – rednet ════════ */
  p8_ep:           { de: '▶ Episode 08',  en: '▶ Episode 08' },
  p8_title:        { de: 'rednet',        en: 'rednet' },
  p8_sub:          { de: 'Computer vernetzen · senden · empfangen · broadcast', en: 'Networking computers · send · receive · broadcast' },
  p8_concept_h:    { de: 'Was ist rednet?', en: 'What is rednet?' },
  p8_concept_p:    { de: 'Mit <strong style="color:var(--cc-cyan)">rednet</strong> können CC-Computer über ein <strong style="color:var(--cc-yellow)">Wireless Modem</strong> miteinander kommunizieren – Nachrichten senden, empfangen, und an alle gleichzeitig broadcasten. Perfekt für ein verteiltes Reaktor-Netzwerk auf deinem Server.', en: 'With <strong style="color:var(--cc-cyan)">rednet</strong>, CC computers can communicate with each other via a <strong style="color:var(--cc-yellow)">Wireless Modem</strong> – sending messages, receiving them, and broadcasting to all at once. Perfect for a distributed reactor network on your server.' },
  p8_prereq_h:     { de: 'Was brauchst du?', en: 'What do you need?' },
  p8_prereq_1:     { de: 'Mindestens <strong style="color:var(--cc-yellow)">2 Computer</strong> (oder Turtles)', en: 'At least <strong style="color:var(--cc-yellow)">2 computers</strong> (or Turtles)' },
  p8_prereq_2:     { de: 'Je ein <strong style="color:var(--cc-yellow)">Wireless Modem</strong> – an einer Seite des Computers platzieren', en: 'One <strong style="color:var(--cc-yellow)">Wireless Modem</strong> each – place on a side of the computer' },
  p8_prereq_3:     { de: 'Beide Computer in Modem-Reichweite (Standard: 64 Blöcke, Ender Modem: unbegrenzt)', en: 'Both computers within modem range (default: 64 blocks, Ender Modem: unlimited)' },
  p8_prereq_4:     { de: 'Eigene ID abfragen mit <span class="inline-code">os.getComputerID()</span>', en: 'Query your own ID with <span class="inline-code">os.getComputerID()</span>' },
  p8_api_h:        { de: 'Die wichtigsten Funktionen', en: 'The most important functions' },
  p8_tip:          { de: '<span class="inline-code">rednet.receive()</span> blockiert das Programm bis eine Nachricht ankommt. Mit Timeout: <span class="inline-code">rednet.receive(nil, 5)</span> wartet maximal 5 Sekunden – danach gibt es <span class="inline-code">nil</span> zurück.', en: '<span class="inline-code">rednet.receive()</span> blocks the program until a message arrives. With timeout: <span class="inline-code">rednet.receive(nil, 5)</span> waits at most 5 seconds – then returns <span class="inline-code">nil</span>.' },
  p8_proto_h:      { de: 'Nachrichten filtern mit Protokollen', en: 'Filtering messages with protocols' },
  p8_proto_p:      { de: 'Mit einem optionalen dritten Parameter versiehst du Nachrichten mit einem <strong style="color:var(--cc-orange)">Protokoll-Label</strong>. Der Empfänger hört dann nur auf ein bestimmtes Protokoll – sinnvoll wenn mehrere Programme gleichzeitig funken.', en: 'With an optional third parameter you add a <strong style="color:var(--cc-orange)">protocol label</strong> to messages. The receiver then listens only to a specific protocol – useful when multiple programs are transmitting at once.' },
  p8_warn:         { de: 'Das Modem muss auf der <strong style="color:var(--cc-yellow)">richtigen Seite</strong> sein! Mit <span class="inline-code">peripheral.find("modem")</span> findest du es automatisch – das ist robuster als eine feste Seite hardcoden.', en: 'The modem must be on the <strong style="color:var(--cc-yellow)">correct side</strong>! Use <span class="inline-code">peripheral.find("modem")</span> to find it automatically – more robust than hardcoding a fixed side.' },
  p8_learned_1:    { de: '<strong style="color:var(--cc-cyan)">rednet.open()</strong> – Wireless Modem aktivieren', en: '<strong style="color:var(--cc-cyan)">rednet.open()</strong> – activating the wireless modem' },
  p8_learned_2:    { de: '<strong style="color:var(--cc-cyan)">rednet.send(id, msg)</strong> – gezielt an eine ID senden', en: '<strong style="color:var(--cc-cyan)">rednet.send(id, msg)</strong> – sending to a specific ID' },
  p8_learned_3:    { de: '<strong style="color:var(--cc-purple)">rednet.broadcast(msg)</strong> – an alle gleichzeitig', en: '<strong style="color:var(--cc-purple)">rednet.broadcast(msg)</strong> – sending to everyone at once' },
  p8_learned_4:    { de: '<strong style="color:var(--cc-cyan)">rednet.receive(proto, timeout)</strong> – empfangen & filtern', en: '<strong style="color:var(--cc-cyan)">rednet.receive(proto, timeout)</strong> – receive & filter' },
  p8_learned_5:    { de: 'Protokoll-Labels für getrennte Kommunikationskanäle', en: 'Protocol labels for separate communication channels' },
  p8_learned_6:    { de: '<strong style="color:var(--cc-green)">peripheral.find("modem")</strong> – Modem automatisch erkennen', en: '<strong style="color:var(--cc-green)">peripheral.find("modem")</strong> – auto-detecting the modem' },
  p8_learned_7:    { de: '<strong style="color:var(--cc-orange)">os.getComputerID()</strong> – eigene ID abfragen', en: '<strong style="color:var(--cc-orange)">os.getComputerID()</strong> – querying your own ID' },
  p8_next:         { de: 'Teil 9 → Tabellen', en: 'Part 9 → Tables' },

  /* ════════ PART 9 – Tabellen ════════ */
  p9_ep:           { de: '▶ Episode 09',  en: '▶ Episode 09' },
  p9_title:        { de: 'Tabellen',      en: 'Tables' },
  p9_sub:          { de: 'Arrays · Key-Value · ipairs · pairs', en: 'Arrays · Key-Value · ipairs · pairs' },
  p9_concept_h:    { de: 'Was ist eine Tabelle?', en: 'What is a table?' },
  p9_concept_p:    { de: 'Eine Tabelle ist Lua\'s universeller Container – sie kann als <strong style="color:var(--cc-orange)">Array</strong> (nummerierte Liste) oder als <strong style="color:var(--cc-cyan)">Dictionary</strong> (Schlüssel-Wert-Paare) verwendet werden. Alles in einem Typ.', en: 'A table is Lua\'s universal container – it can be used as an <strong style="color:var(--cc-orange)">array</strong> (numbered list) or as a <strong style="color:var(--cc-cyan)">dictionary</strong> (key-value pairs). All in one type.' },
  p9_tip1:         { de: 'In Lua beginnen Arrays bei Index <strong style="color:var(--cc-yellow)">1</strong>, nicht bei 0 wie in den meisten anderen Sprachen!', en: 'In Lua arrays start at index <strong style="color:var(--cc-yellow)">1</strong>, not 0 like in most other languages!' },
  p9_tip2:         { de: '<strong style="color:var(--cc-yellow)">ipairs</strong> → für nummerierte Arrays (stoppt beim ersten nil).<br><strong style="color:var(--cc-yellow)">pairs</strong> → für Key-Value Tabellen (geht alle Einträge durch, Reihenfolge nicht garantiert).', en: '<strong style="color:var(--cc-yellow)">ipairs</strong> → for numbered arrays (stops at first nil).<br><strong style="color:var(--cc-yellow)">pairs</strong> → for key-value tables (iterates all entries, order not guaranteed).' },
  p9_learned_1:    { de: 'Tabelle als <strong style="color:var(--cc-orange)">Array</strong> – nummerierte Liste ab Index 1', en: 'Table as <strong style="color:var(--cc-orange)">array</strong> – numbered list starting at index 1' },
  p9_learned_2:    { de: '<strong style="color:var(--cc-orange)">#tabelle</strong> – Länge eines Arrays', en: '<strong style="color:var(--cc-orange)">#table</strong> – length of an array' },
  p9_learned_3:    { de: 'Tabelle als <strong style="color:var(--cc-cyan)">Key-Value</strong> – Zugriff mit <span class="inline-code">tabelle.key</span> oder <span class="inline-code">tabelle["key"]</span>', en: 'Table as <strong style="color:var(--cc-cyan)">key-value</strong> – access with <span class="inline-code">table.key</span> or <span class="inline-code">table["key"]</span>' },
  p9_learned_4:    { de: '<strong style="color:var(--cc-cyan)">ipairs()</strong> – Array der Reihe nach durchlaufen', en: '<strong style="color:var(--cc-cyan)">ipairs()</strong> – iterating an array in order' },
  p9_learned_5:    { de: '<strong style="color:var(--cc-cyan)">pairs()</strong> – alle Key-Value Einträge durchlaufen', en: '<strong style="color:var(--cc-cyan)">pairs()</strong> – iterating all key-value entries' },
  p9_learned_6:    { de: 'Tabellen verschachteln – Tabelle aus Tabellen', en: 'Nesting tables – a table of tables' },
  p9_learned_7:    { de: '<strong style="color:var(--cc-purple)">_</strong> als Platzhalter wenn ein Rückgabewert nicht gebraucht wird', en: '<strong style="color:var(--cc-purple)">_</strong> as placeholder when a return value is not needed' },
  p9_next:         { de: 'Teil 10 → paintutils ★', en: 'Part 10 → paintutils ★' },

  /* ════════ PART 10 – paintutils ════════ */
  p10_ep:          { de: '▶ Episode 10 – FINALE', en: '▶ Episode 10 – FINALE' },
  p10_title:       { de: 'paintutils',   en: 'paintutils' },
  p10_sub:         { de: 'Farben · Formen zeichnen · term API · GUIs bauen', en: 'Colors · Drawing shapes · term API · Building GUIs' },
  p10_concept_h:   { de: 'Was ist paintutils?', en: 'What is paintutils?' },
  p10_concept_p:   { de: 'Mit <strong style="color:var(--cc-cyan)">paintutils</strong> und der <strong style="color:var(--cc-cyan)">term</strong> API kannst du auf dem CC-Terminal zeichnen – Farben setzen, Rechtecke füllen, Text positionieren. Das ist die Grundlage für alle GUIs in CC: Tweaked.', en: 'With <strong style="color:var(--cc-cyan)">paintutils</strong> and the <strong style="color:var(--cc-cyan)">term</strong> API you can draw on the CC terminal – set colors, fill rectangles, position text. This is the foundation for all GUIs in CC: Tweaked.' },
  p10_palette_h:   { de: 'Die 16 CC-Farben', en: 'The 16 CC colors' },
  p10_termapi_h:   { de: 'Die wichtigsten term-Befehle', en: 'The most important term commands' },
  p10_tip:         { de: '<span class="inline-code">term.getSize()</span> gibt Breite und Höhe zurück. Standard-Computer: <strong style="color:var(--cc-yellow)">51 × 19</strong>. Damit kannst du deine GUI immer zentriert zeichnen, egal wie groß der Screen ist.', en: '<span class="inline-code">term.getSize()</span> returns width and height. Default computer: <strong style="color:var(--cc-yellow)">51 × 19</strong>. This lets you always draw your GUI centered, regardless of screen size.' },
  p10_learned_1:   { de: 'Die 16 CC-Farben mit <strong style="color:var(--cc-yellow)">colors.NAME</strong> ansprechen', en: 'Accessing the 16 CC colors with <strong style="color:var(--cc-yellow)">colors.NAME</strong>' },
  p10_learned_2:   { de: '<strong style="color:var(--cc-cyan)">term.setBackgroundColor / setTextColor</strong>', en: '<strong style="color:var(--cc-cyan)">term.setBackgroundColor / setTextColor</strong>' },
  p10_learned_3:   { de: '<strong style="color:var(--cc-cyan)">term.clear / setCursorPos / write / getSize</strong>', en: '<strong style="color:var(--cc-cyan)">term.clear / setCursorPos / write / getSize</strong>' },
  p10_learned_4:   { de: '<strong style="color:var(--cc-cyan)">paintutils.drawFilledBox / drawBox / drawLine</strong>', en: '<strong style="color:var(--cc-cyan)">paintutils.drawFilledBox / drawBox / drawLine</strong>' },
  p10_learned_5:   { de: 'GUI-Elemente mit Funktionen modular aufbauen', en: 'Building GUI elements modularly with functions' },
  p10_learned_6:   { de: 'Events und paintutils kombinieren für interaktive GUIs', en: 'Combining events and paintutils for interactive GUIs' },
  p10_learned_7:   { de: 'Screen nach Programm-Ende sauber zurücksetzen', en: 'Cleanly resetting the screen after the program ends' },
  p10_series_done: { de: '★ SERIE ABGESCHLOSSEN ★', en: '★ SERIES COMPLETE ★' },
  p10_series_p:    { de: 'Du hast alle 10 Teile der CC: Tweaked Tutorial-Serie durchgearbeitet!<br>Von "Hello World" bis zur vollständigen GUI – du kennst jetzt die Grundlagen.', en: 'You\'ve completed all 10 parts of the CC: Tweaked tutorial series!<br>From "Hello World" to a full GUI – you now know the fundamentals.' },


  label_steps:       { de: 'ANLEITUNG',      en: 'GUIDE' },
  nav_startseite:    { de: 'Startseite',      en: 'Home' },
  nav_tutorials_btn: { de: 'Tutorials',       en: 'Tutorials' },
  dd_soon:           { de: 'bald',            en: 'soon' },
  tut_final_hdr:     { de: '★ ABSCHLUSSPROGRAMM – ', en: '★ FINAL PROJECT – ' },

  /* ── Footer ─────────────────────────────────── */
  footer_brand:    { de: 'SideQuestChris · CC: Tweaked Tutorial-Serie', en: 'SideQuestChris · CC: Tweaked Tutorial Series' },

  /* ════════ index.html ════════ */
  idx_hero_eyebrow:  { de: '▶ MINECRAFT MODDED COMMUNITY', en: '▶ MINECRAFT MODDED COMMUNITY' },
  idx_hero_sub:      { de: 'Tutorials, Server & Community rund um Minecraft Mods. CC: Tweaked, Create, AE2 und mehr – auf Deutsch, Schritt für Schritt.', en: 'Tutorials, Server & Community around Minecraft Mods. CC: Tweaked, Create, AE2 and more – step by step.' },
  idx_hero_btn_srv:  { de: '⬡ Server joinen', en: '⬡ Join Server' },
  idx_srv_eye:       { de: '▶ UNSER SERVER', en: '▶ OUR SERVER' },
  idx_srv_tit:       { de: 'ATM10 <span>Server</span>', en: 'ATM10 <span>Server</span>' },
  idx_srv_desc:      { de: 'Spiel mit der Community auf unserem All the Mods 10 Server. Einfach joinen!', en: 'Play with the community on our All the Mods 10 Server. Just join!' },
  idx_srv_status:    { de: 'Verbinde...', en: 'Connecting...' },
  idx_tut_eye:       { de: '▶ TUTORIALS', en: '▶ TUTORIALS' },
  idx_tut_tit:       { de: 'Lerne <span>Mods</span>', en: 'Learn <span>Mods</span>' },
  idx_tut_desc:      { de: 'Jede Reihe baut aufeinander auf – von den Grundlagen bis zur Automatisierung.', en: 'Each series builds on the previous – from the basics to full automation.' },
  idx_cc_desc:       { de: 'Lua-Programmierung, Turtles, rednet – von Hello World bis GUI.', en: 'Lua programming, Turtles, rednet – from Hello World to GUI.' },
  idx_cc_parts:      { de: '10 TEILE ▶', en: '10 PARTS ▶' },
  idx_cr_desc:       { de: 'Mechanische Automatisierung, Züge, Schiffsgetriebe.', en: 'Mechanical automation, trains, ship drives.' },
  idx_me_desc:       { de: 'Fortgeschrittene Energiesysteme und Ore-Processing.', en: 'Advanced energy systems and ore processing.' },
  idx_er_desc:       { de: 'Multiblock-Reaktoren bauen und automatisieren.', en: 'Building and automating multiblock reactors.' },
  idx_ae_desc:       { de: 'Applied Energistics 2 – ME-Netzwerke & Crafting.', en: 'Applied Energistics 2 – ME networks & crafting.' },
  idx_coming_soon:   { de: 'COMING SOON', en: 'COMING SOON' },
  idx_about_eye:     { de: '▶ DER KERL DAHINTER', en: '▶ THE GUY BEHIND IT' },
  idx_about_txt1:    { de: 'Hey! Ich bin Chris – Minecraft-Enthusiast, Modpack-Nerd und Content Creator. Ich betreibe einen ATM10-Server für ~25 Spieler und erstelle Tutorials für alles rund um Minecraft Mods.', en: "Hey! I'm Chris – Minecraft enthusiast, modpack nerd and content creator. I run an ATM10 server for ~25 players and create tutorials for everything around Minecraft Mods." },
  idx_about_txt2:    { de: 'Mein Fokus liegt auf CC: Tweaked, Automatisierung und technischen Mods. Auf YouTube und TikTok teile ich Guides, Showcases und Server-Content.', en: 'My focus is on CC: Tweaked, automation, and technical mods. On YouTube and TikTok I share guides, showcases, and server content.' },
  idx_about_stat_srv:{ de: 'SERVER SPIELER', en: 'SERVER PLAYERS' },
  idx_yt_eye:        { de: '▶ YOUTUBE', en: '▶ YOUTUBE' },
  idx_yt_tit:        { de: 'Neueste <span>Videos</span>', en: 'Latest <span>Videos</span>' },
  idx_yt_desc:       { de: 'Tutorials, Showcases & Server-Content – abonniere für neue Guides.', en: 'Tutorials, showcases & server content – subscribe for new guides.' },
  idx_yt_more:       { de: 'Alle Videos auf YouTube ▶', en: 'All videos on YouTube ▶' },
  idx_yt_sub:        { de: '▶ Abonnieren', en: '▶ Subscribe' },
  idx_tt_eye:        { de: '▶ TIKTOK', en: '▶ TIKTOK' },
  idx_tt_tit:        { de: 'Kurze <span>Clips</span>', en: 'Short <span>Clips</span>' },
  idx_tt_desc:       { de: 'Schnelle Minecraft-Tipps, Mod-Shortcuts und Server-Content in kurz.', en: 'Quick Minecraft tips, mod shortcuts, and server content – short form.' },
  idx_tt_follow:     { de: '♪ TikTok folgen ↗', en: '♪ Follow on TikTok ↗' },
  idx_faq_eye:       { de: '▶ FAQ', en: '▶ FAQ' },
  idx_faq_tit:       { de: 'Häufige <span>Fragen</span>', en: 'Frequently Asked <span>Questions</span>' },
  idx_faq_q1:        { de: 'Wie kann ich auf dem Server mitspielen?', en: 'How can I join the server?' },
  idx_faq_a1:        { de: 'Installiere <strong>All the Mods 10</strong> über CurseForge oder ATLauncher, öffne Multiplayer und gib <strong>SideQuest.serv.cx</strong> ein. Details auf der <a href="server.html">Server-Seite</a>.', en: 'Install <strong>All the Mods 10</strong> via CurseForge or ATLauncher, open Multiplayer and enter <strong>SideQuest.serv.cx</strong>. Details on the <a href="server.html">server page</a>.' },
  idx_faq_q2:        { de: 'Gibt es eine Whitelist?', en: 'Is there a whitelist?' },
  idx_faq_a2:        { de: 'Der Server ist aktuell offen – einfach joinen! Bei Fragen tritt unserem <a href="https://discord.gg/j46UA5ESwN" target="_blank">Discord</a> bei.', en: 'The server is currently open – just join! For questions, join our <a href="https://discord.gg/j46UA5ESwN" target="_blank">Discord</a>.' },
  idx_faq_q3:        { de: 'Welche Modpack-Version?', en: 'Which modpack version?' },
  idx_faq_a3:        { de: '<strong>All the Mods 10</strong> auf NeoForge für Minecraft 1.21.1. Die genaue Version siehst du immer auf der Server-Seite.', en: '<strong>All the Mods 10</strong> on NeoForge for Minecraft 1.21.1. The exact version is always shown on the server page.' },
  idx_faq_q4:        { de: 'Für wen sind die Tutorials?', en: 'Who are the tutorials for?' },
  idx_faq_a4:        { de: 'Für Einsteiger – keine Vorkenntnisse nötig! Jede Serie baut schrittweise auf. Perfekt als Einstieg und als Nachschlagewerk.', en: 'For beginners – no prior knowledge needed! Each series builds step by step. Perfect as a starting point and reference.' },
  idx_faq_q5:        { de: 'Kann ich Themen vorschlagen?', en: 'Can I suggest topics?' },
  idx_faq_a5:        { de: 'Sehr gerne! Schreib uns auf <a href="https://discord.gg/j46UA5ESwN" target="_blank">Discord</a> oder kommentiere auf <a href="https://youtube.com/@SideQuestChrisYT" target="_blank">YouTube</a>.', en: 'Absolutely! Write to us on <a href="https://discord.gg/j46UA5ESwN" target="_blank">Discord</a> or comment on <a href="https://youtube.com/@SideQuestChrisYT" target="_blank">YouTube</a>.' },
  idx_news_eye:      { de: '▶ CHANGELOG', en: '▶ CHANGELOG' },
  idx_news_tit:      { de: 'Was ist <span>neu?</span>', en: "What's <span>new?</span>" },
  idx_news_1_ti:     { de: 'Website Launch 🎉', en: 'Website Launch 🎉' },
  idx_news_1_body:   { de: 'SideQuestCommunity Website ist online! Landing Page, Server-Status, CC: Tweaked Tutorial-Serie mit 10 Teilen.', en: 'SideQuestCommunity website is live! Landing page, server status, CC: Tweaked tutorial series with 10 parts.' },
  idx_news_2_ti:     { de: 'CC: Tweaked Serie komplett', en: 'CC: Tweaked Series Complete' },
  idx_news_2_body:   { de: 'Alle 10 Teile der CC: Tweaked Tutorial-Serie sind fertig – von Hello World bis paintutils GUI.', en: 'All 10 parts of the CC: Tweaked tutorial series are done – from Hello World to paintutils GUI.' },
  idx_news_3_ti:     { de: 'ATM10 Server läuft stabil', en: 'ATM10 Server Running Stable' },
  idx_news_3_body:   { de: 'Server auf NeoForge 1.21.1, regelmäßige Modpack-Updates.', en: 'Server on NeoForge 1.21.1, regular modpack updates.' },
  idx_news_4_ti:     { de: 'Create Mod Tutorial-Serie', en: 'Create Mod Tutorial Series' },
  idx_news_4_body:   { de: 'Nächste Tutorial-Reihe in Planung: Create Mod – Mechanische Automatisierung von Grund auf.', en: 'Next tutorial series in planning: Create Mod – Mechanical automation from the ground up.' },
  idx_footer_txt:    { de: 'SideQuestCommunity · SideQuest.serv.cx · ATM10 · Auf Deutsch', en: 'SideQuestCommunity · SideQuest.serv.cx · ATM10' },

  /* ════════ server.html ════════ */
  srv_h_status:      { de: 'Server Status', en: 'Server Status' },
  srv_connecting:    { de: 'Verbinde...', en: 'Connecting...' },
  srv_motd_init:     { de: '▶ Verbinde mit Server...', en: '▶ Connecting to server...' },
  srv_stat_players:  { de: 'SPIELER ONLINE', en: 'PLAYERS ONLINE' },
  srv_stat_tps_lbl:  { de: 'TPS (ZIEL 20)', en: 'TPS (TARGET 20)' },
  srv_perf_note:     { de: 'TPS/MSPT/CPU benötigen ein CC: Tweaked Monitor-Script auf dem Server. Uptime wird über die mcsrvstat API abgerufen.', en: 'TPS/MSPT/CPU require a CC: Tweaked monitor script on the server. Uptime is fetched via the mcsrvstat API.' },
  srv_h_players:     { de: 'Online Spieler', en: 'Online Players' },
  srv_h_join:        { de: 'Wie joinen?', en: 'How to join?' },
  srv_step1_tit:     { de: 'ATM10 Modpack installieren', en: 'Install ATM10 Modpack' },
  srv_step1_desc:    { de: 'Lade "All the Mods 10" über CurseForge oder ATLauncher herunter. Die Modpack-Version muss mit dem Server übereinstimmen.', en: 'Download "All the Mods 10" via CurseForge or ATLauncher. The modpack version must match the server.' },
  srv_step2_tit:     { de: 'Discord joinen & Whitelist anfragen', en: 'Join Discord & request whitelist' },
  srv_step2_desc:    { de: 'Tritt dem Discord bei, gehe in den #whitelist Kanal und schreibe deinen Minecraft-Nutzernamen.', en: 'Join the Discord, go to the #whitelist channel and write your Minecraft username.' },
  srv_step2_btn:     { de: 'Discord joinen ↗', en: 'Join Discord ↗' },
  srv_step3_tit:     { de: 'Verbinden!', en: 'Connect!' },
  srv_step3_desc:    { de: 'Minecraft → Multiplayer → Server hinzufügen → IP einfügen → Fertig!', en: 'Minecraft → Multiplayer → Add Server → Enter IP → Done!' },
  srv_ip_copy:       { de: '📋 IP kopieren', en: '📋 Copy IP' },
  srv_h_mods:        { de: 'ATM10 Mod Highlights', en: 'ATM10 Mod Highlights' },
  srv_cc_desc:       { de: 'Lua-Computer & Turtles – unser Tutorial-Thema!', en: 'Lua computers & Turtles – our tutorial topic!' },
  srv_cr_desc:       { de: 'Mechanische Automation mit Zahnrädern & Zügen.', en: 'Mechanical automation with gears & trains.' },
  srv_me_desc:       { de: 'Energie, Gases, Ore-Processing auf 5 Stufen.', en: 'Energy, gases, ore processing in 5 stages.' },
  srv_er_desc:       { de: 'Multiblock-Reaktoren für massive RF-Power.', en: 'Multiblock reactors for massive RF power.' },
  srv_ae_desc:       { de: 'ME-Netzwerke und vollständige Crafting-Automation.', en: 'ME networks and full crafting automation.' },
  srv_rs_desc:       { de: 'Alternatives Storage-System zu AE2.', en: 'Alternative storage system to AE2.' },
  srv_bo_desc:       { de: 'Magische Blumen & Mana-basierte Automation.', en: 'Magic flowers & mana-based automation.' },
  srv_tc_desc:       { de: 'Werkzeuge aus verschiedenen Materialien schmieden.', en: 'Forge tools from various materials.' },
  srv_oc_desc:       { de: 'Dämonen beschwören & magische Dimensionen.', en: 'Summon demons & magical dimensions.' },
  srv_bm_desc:       { de: 'Blut-basierte Magie & Altäre.', en: 'Blood-based magic & altars.' },
  srv_ts_desc:       { de: 'Maschinen, Energie-Netzwerke & Processing.', en: 'Machines, energy networks & processing.' },
  srv_more_desc:     { de: 'Über 250 Mods insgesamt im ATM10 Paket!', en: 'Over 250 mods total in the ATM10 package!' },
  srv_tt_desc:       { de: 'Kurze Minecraft-Clips, Mod-Tipps und Server-Content. Schau vorbei!', en: 'Short Minecraft clips, mod tips and server content. Come check it out!' },
  srv_tt_follow:     { de: '♪ TikTok folgen ↗', en: '♪ Follow on TikTok ↗' },
  srv_dc_desc:       { de: 'Whitelist-Anfragen, Server-Support, Modpack-Hilfe, Community-Events und alles rund um ATM10 und unsere Tutorial-Reihen.', en: 'Whitelist requests, server support, modpack help, community events and everything around ATM10 and our tutorial series.' },
  srv_dc_members:    { de: 'MITGLIEDER', en: 'MEMBERS' },
  srv_dc_join:       { de: 'Discord beitreten ↗', en: 'Join Discord ↗' },
  srv_last_upd_init: { de: 'Lädt...', en: 'Loading...' },
  srv_refresh_btn:   { de: '↻ Aktualisieren', en: '↻ Refresh' },
  srv_footer_txt:    { de: 'SideQuestCommunity · SideQuest.serv.cx · ATM10', en: 'SideQuestCommunity · SideQuest.serv.cx · ATM10' },
};

/* ═══════════════════════════════════════════════
   ENGINE
   ═══════════════════════════════════════════════ */

const LANG_KEY = 'sqc_lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'de';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  location.reload();
}

function t(key, lang) {
  lang = lang || getLang();
  return (TRANSLATIONS[key] && TRANSLATIONS[key][lang])
    || (TRANSLATIONS[key] && TRANSLATIONS[key].de)
    || null;
}

function applyLang(lang) {
  // Plain text nodes
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = t(key, lang);
    if (val === null) return; // key not found – keep original text
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  // HTML content (for bold/spans inside text)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    var val = t(key, lang);
    if (val === null) return;
    el.innerHTML = val;
  });
  // data-label attributes on cards
  document.querySelectorAll('[data-label-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-label-i18n');
    el.setAttribute('data-label', t(key, lang));
  });
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });
}

function buildLangSwitcher() {
  var cur = getLang();
  return '<div class="lang-switcher">'
    + '<button class="lang-btn' + (cur === 'de' ? ' lang-active' : '') + '" data-lang="de" onclick="setLang(\'de\')">DE</button>'
    + '<span class="lang-sep">|</span>'
    + '<button class="lang-btn' + (cur === 'en' ? ' lang-active' : '') + '" data-lang="en" onclick="setLang(\'en\')">EN</button>'
    + '</div>';
}

function injectLangSwitcher() {
  var right = document.querySelector('.nav-right');
  if (!right || right.querySelector('.lang-switcher')) return;
  right.insertAdjacentHTML('afterbegin', buildLangSwitcher());
}

document.addEventListener('DOMContentLoaded', function() {
  injectLangSwitcher();
  var lang = getLang();
  applyLang(lang);
  updateLangButtons(lang);
  document.documentElement.lang = lang;
});
