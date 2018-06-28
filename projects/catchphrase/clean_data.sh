cp data.csv tmp
awk '!a[$0]++' tmp > data.csv
rm tmp
