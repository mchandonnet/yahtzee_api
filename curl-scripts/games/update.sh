#!/bin/bash

API="http://localhost:4741"
URL_PATH="/games/${GAMEID}"

curl "${API}${URL_PATH}" \
--include \
--request PATCH \
--header "Authorization: Bearer ${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
    "game": {
      "ones": "'"${ONES}"'",
      "twos": "'"${TWOS}"'",
      "threes": "'"${THREES}"'",
      "fours": "'"${FOURS}"'",
      "fives": "'"${FIVES}"'",
      "sixes": "'"${SIXES}"'"
    }
  }'
echo
