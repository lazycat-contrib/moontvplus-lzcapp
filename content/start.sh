#!/bin/sh
set -eu

export USERNAME=$(printf '%s' "$USERNAME_B64" | base64 -d)
export PASSWORD=$(printf '%s' "$PASSWORD_B64" | base64 -d)

exec node start.js
