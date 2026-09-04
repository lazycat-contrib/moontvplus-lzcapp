# MoonTVPlus for LazyCat

LazyCat LPK v2 packaging for [MoonTVPlus](https://github.com/mtvpls/MoonTVPlus), an enhanced MoonTV-based media aggregation player.

## Runtime

- Single MoonTVPlus `v225.0.1` instance backed by persistent Kvrocks `2.15.0` storage.
- The setup wizard creates a site username and random password; `/login` is autofilled by the built-in password injector.
- The application root is public because MoonTVPlus provides its own authentication.
- Server-side offline downloads persist under `/lzcapp/var/moontvplus/downloads`.
- Both services run as root as requested so their persistent directories remain writable without UID owner mapping.
- MoonTVPlus ships as an empty shell without built-in video or live sources. Add only sources you are legally authorized to access.

The supplied 500×500 logo was resized to the required 512×512 PNG and palette-optimized to 59 KB.

The LazyCat store already contains `cloud.lazycat.app.moontvplus`. This repository intentionally uses the distinct package ID `community.lazycat.app.moontvplus` as explicitly requested.

## License note

The upstream README shows an MIT badge, but the repository's actual `LICENSE` file contains CC BY-NC-SA 4.0. This package records the license from the authoritative file.

## Build

```sh
lzc-cli project release -o dist/application.lpk
```

## GitHub Actions

The scheduled workflow follows stable SemVer tags for `ghcr.io/mtvpls/moontvplus`, creates a versioned GitHub Release asset, and publishes only to the MiaoMiao private store.

Required repository or organization Secrets:

- `APPSTORE_URL`
- `APPSTORE_TOKEN`

Optional Secrets:

- `APP_ID`
- `PRIVATE_STORE_GROUP_CODES`
