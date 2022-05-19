# Read from the file file.txt and output all valid phone numbers to stdout.
while read line; do
    for (( i=0; i<${#line}; i++ )); do
        echo "${line:$i:1}";
    done
done <"file.txt"
