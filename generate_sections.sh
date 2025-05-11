#!/bin/bash

start=${1:-1}
end=${2:-10}
folder=${3:-.}

mkdir -p "$folder"

for ((i=start; i<=end; i++))
do
cat <<EOF > "$folder/section_${i}.md"
---
title: Section $i
description: Section $i description
order: $i
---

## Section $i

Contenu de la section $i.
EOF
done
