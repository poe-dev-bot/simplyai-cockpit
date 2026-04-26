#!/bin/bash
# Nerve start wrapper — .env is loaded by the Node server at runtime.
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "${SCRIPT_DIR}"
export PATH="/opt/homebrew/bin:${PATH}"
export NODE_ENV=production
exec node "${SCRIPT_DIR}/server-dist/index.js"
