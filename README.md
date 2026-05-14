# Kronologia PWA

PWA bihurtutako historia kronologia ariketa. Fitxategi nagusiak:

- `index.html`: aplikazioaren egitura.
- `styles.css`: itxura eta responsive diseinua.
- `app.js`: ariketaren logika eta PWA instalazio botoia.
- `manifest.webmanifest`: PWA metadatuak eta ikonoak.
- `service-worker.js`: offline cache-a.
- `assets/icons/`: aplikazioaren ikonoak.

## Probatzeko

Service worker-ak HTTPS edo localhost behar du. Karpeta honetan exekutatu:

```bash
python3 -m http.server 8080
```

Ondoren ireki: `http://localhost:8080`
