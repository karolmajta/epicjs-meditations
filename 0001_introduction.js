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
 * testy z jakimi się zetkniesz w tym skrypcie już napisałem za Ciebie.Twoim
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
 * komunikat jest czerwony, to wpisany przez Ciebie tekst po podstawieniu w miejsce
 * podwójnego podkreślnika nie tworzy poprawnego kodu JavaScript.
 *
 * Przedstawiona poniżej asercja `assert` jest bardzo prosta. Sprawdza czy jej
 * pierwszy argument jest "prawdziwy" (specjalnie użyłem cudzysłowiu, dlaczego
 * dowiesz się już niebawem), a jeśli nie jest, powoduje wyświetlenie komunikatu.
 *
 * Spróbuj pobawić się poniższym formularzem i zobaczyć jak zachowuje się
 * automatyczny test. Aby test przeszedł, możesz wpisać do formularza `true`.
 */

assert(__, "Nie mówisz mi całej prawdy!");

// assert-equals|assertEquals

/* Z asercją `assertEquals` miałeś do czynienia przed chwilą. Sprawdza ona, czy
 * obydwa jej argumenty są sobie równe. Warto zauważyć, że wykorzystuje ona do tego
 * operator `==`. Nie przejmuj się, jeśli nie wiesz jeszcze co z tego wynika. Spróbuj
 * wpisać w poniższą asercję coś co jest fałszywe. Możesz popuścić wodzę fantazji,
 * bo w JavaScript nie tylko `false` jest równe `false`.
 */

assertEquals(__, false);

// assert-not-equals|assertNotEquals

/*
 * `AssertNotEquals` to przeciwieństwo `assertEquals`. Sprawdza, czy dwa elementy są
 * różne od siebie, a robi to z pomocą operatora `!=`. Specjalnie jako jej drugi argument
 * podałem `true` - powinna zadziałać dla wartości z powyższego przykładu. Prawda?
 */

assertNotEquals(__, true);

// assert-strict-equals|assertStrictEquals

/*
 * Zauważyłeś już pewnie, że pojęcie "równości" jest w JS dość... nieortodoksyjne.
 * Na szczęście istnieją sposoby, aby sprawdzić, że dwie zmienne są "na prawdę równe".
 * Służy do tego operator `===`. Asercja `assertStrictEquals` używa tego właśnie
 * operatora, aby stwierdzić tzw. "dokładną równość" (strict equality) pomiędzy
 * dwiema zmiennymi. Sprawdź, czy wartość, którą wykorzystałeś powyżej jest
 * "dokładnie równa" logicznej wartości `false`.
 */

assertStrictEquals(__, false);

// assert-not-strict-equals|assertNotStrictEquals

/*
 * Podobnie jak `assertEquals`, również `assertStrictEquals` posiada swoje
 * przeciwieństwo. Asercja `assertNotStrictEquals` sprawdza, czy dwie zmienne
 * są "dokładnie nierówne" (tak, wiem jak to brzmi...). Spróbuj pobawić się tą
 * asercją wykorzystująć liczbę `1` i string `"1"`.
 */

assertNotStrictEquals(__, "1");

// co-wiedziec|Co powinieneś wiedzieć?

/*
 * Nie przejmuj się, jeśli nie zrozumiałeś wszystkiego z tego rozdziału,
 * będziemy dokładnie omawiać jak w JS działają zmienne, operatory, funkcje
 * i inne rzeczy. Chciałbym natomiast, żebyś potrafił sprawnie posługiwać
 * się tą aplikacją, to znaczy odróżniał błędy asercji od błędów składni,
 * oraz wiedział jak działają poszczególne asercje.
 *
 * Jeśli masz ochotę na nieco więcej, spróbuj rozwiązać przykład poniżej.
 */

assert(__, "Rzeczy nie zawsze są tym czym się wydają...");
assertEquals(__, 0);
assertStrictEquals(10 + __, "100");