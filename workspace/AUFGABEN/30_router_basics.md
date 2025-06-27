# React Router

# Dateien

- src/main.tsx
- src/routes/AppLayout.tsx (anlegen!)
- src/routes/Home.tsx (anlegen!)
- src/routes/Add.tsx (anlegen!)

# Aufgabe

- Füge den React Router hinzu, so dass du zwei Routen in deiner Anwendung hast: eine Route für die Liste und eine Route für das Formular

# Schritte

1. Die `App`-Komponente hat jetzt ausgedient
    - Lege die Datei `routes/Home.tsx` an
        - Diese Datei soll eine Komponente exportieren, die die
          `PlantCardListLoader`-Komponente rendert (inklusive Error- und SuspenseBoundary)
            - Verschiebe den entsprechenden Code aus `App` in diese Komponente
    - Lege die Datei `routes/Add.tsx` an
        - Diese Datei soll eine Komponente exportieren, die (zunächst) nur die `PlantForm`-Komponente rendert
    - Lege die Datei `routes/AppLayout.tsx` an
        - Die darin enthaltene Komponente soll als gemeinsames "Layout" für alle Routen der Anwendung dienen
            - Du kannst darin ein `div` mit der CSS-Klasse `AppLayout` rendern
            - Mit der `Outlet`-Komponente vom React Router bindest du den Inhalt der Route ein

2. Konfiguriere den Router und die Routen
    - In der `main.tsx`-Datei wird unsere Anwendung gestartet und initial gerendert.
    - Dort musst du (als Kind von `QueryClientProvider`) nun die `BrowserRouter`-Komponente rendern (`App` entfernen)
    - Die `BrowserRouter`-Komponente erwartet als Kind eine `Routes`-Komponente
    - Unterhalb von `Routes` kannst du dann drei `Route`-Komponenten rendern, die die Pfade unserer Anwendung festlegen:
        - für `/` soll `AppLayout` gerendert werden
        - Als `index`-Komponente für `/` soll `Home` gerendert werden
        - Als `add`-Route soll `Add` gerendert werden
    - Du kannst die Anwendung testen, in dem du zunächst manuell die Routen (`/` bzw. `/add` im Browser aufrufst)
3. Baue die Navigation zwischen den beiden Routen
    - In `Home` und `Add` soll es einen
      `Link` auf die jeweils andere Route geben, so dass man zwischen den beiden Routen hin- und herwechseln kann

# Material

- React Router:
    - Routen konfigurieren: https://reactrouter.com/start/declarative/routing#configuring-routes
        - Layout Routes: https://reactrouter.com/start/declarative/routing#layout-routes
        - Index Routes: https://reactrouter.com/start/declarative/routing#index-routes
    - Link-Komponente: https://reactrouter.com/start/declarative/navigating#link
