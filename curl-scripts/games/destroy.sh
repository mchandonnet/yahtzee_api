#!/bin/bash

API="http://localhost:4741"
URL_PATH="/games/${GAMEID}"

curl "${API}${URL_PATH}" \
--include \
--request DELETE \
--header "Authorization: Bearer ${TOKEN}"

echo