// 0001-wstep|Wstęp

// hello-world|Hello World!

/*
 * Po pierwsze chciałbym Ci powiedzieć, że bardzo się cieszę, że czytasz ten
 * tutorial. W kilku krótkich rozdziałach postaram się przybliżyć Ci podstawy
 * JavaScript. Jak pewnie już zdążyłeś zauważyć (albo za moment zauważysz),
 * wszystkie przykłady kodu w tym skrypcie podawane są jako interaktywne testy,
 * które możesz wypełniać aby sprawdzać swoją wiedzę. Za chwilę opiszę dokładniej
 * w jaki sposób możesz posługiwać się tą stroną, ale najpierw starym zwyczajem
 * nudnych książek o programowaniu rozpocznimy od powitania.
 *
 * W pole formularza poniżej wpisz `"Hello World!"` (nie zapomnij o cudzysłowiach)
 * i naciśnij niebieski przycisk "Sprawdź...".
 */

assertEquals(__, "Hello World!");
assertEquals(__, (function () { return "Hello World!"; })() );

// assert|assert (i inne asercje)

/*
 * Przed chwilą uruchomiłeś swój pierwszy *automatyczny test*. Pisanie testów
 * jest świetne, ale nie jest głównym tematem naszego kursu, dlatego wszystkie
 * testy z jakimi się zetkniesz w tym skrypcie już napisałem za Ciebie. Twoim
 * zadaniem będzie uzupełnić formularz tak, aby po podstawieniu jego zawartości
 * do testu w miejsce podwójnego podkreślnika (__) program wykonał się poprawnie.
 * Mówiąc językiem testów, chodzi o to, aby wszystkie asercje "przeszły".
 *
 * Co to właściwie są asercje? To zwykłe funkcje, które w jakiś sposób potrafią
 * ocenić, czy przekazane im argumenty spełniają pewne kryteria. Jeśli nie spełniają,
 * potrafią jakoś zasygnalizować to światu. W naszym skrypcie jeśli jakaś asercja
 * "nie przechodzi", nad niebieskim przyciskiem "Sprawdź..." pojawi się pomarańczowy
 * komunikat.
 *
 * Kolor komunikatu ma znaczenie - jeśli jest pomarańczowy, oznacza to, że któraś
 * z asercji nie przeszła. Treść komunikatu powie Ci co było tego powodem. Jeśli
 * komunikat jest czerwony, to po podstawieniu wpisany przez Ciebie tekst po
 * podstawieniu w miejsce podwójnego podkreślnika nie tworzy poprawnego kodu
 * JavaScript. Najlepiej sprawdź wówczas brakujące cudzysłowie, nawiasy i śrendiki.
 *
 * Przedstawiona poniżej asercja `assert` jest bardzo prosta. Sprawdza czy jej
 * pierwszy argument jest "prawdziwy" (specjalnie użyłem cudzysłowiu, dlaczego
 * dowiesz się już niebawem), a jeśli nie jest, powoduje wyświetlenie komunikatu.
 *
 * Spróbuj pobawić się poniższym formularzem i zobaczyć jak zachowuje się
 * automatyczny test. Aby test przeszedł, możesz wpisać do formularza `true`.
 */

assert(__, "Nie mówisz mi całej prawdy!");