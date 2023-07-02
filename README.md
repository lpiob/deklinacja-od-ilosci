# deklinacja-od-ilosci

This module enables the declensions of Polish nouns based on their quantity.

Ten moduł pozwala na deklinację rzeczowników w zależności od ich ilości.

Pozwala na pisanie:
- 0 komentarzy
- 1 komentarz
- 2 komentarze

zamiast "komentarze: 0".

# Sposób użycia

```
const deklinacja = require('deklinacja-od-ilosci');

const ile = 2
const odmiana = deklinacja(ile, "kot", "koty", "kotów");
console.log(`Ala ma ${ile} ${odmiana}`);
```

