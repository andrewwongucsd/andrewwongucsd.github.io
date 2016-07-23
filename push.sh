git add .
if [ -z "$1" ]; then
  git commit -m $(date +%F+%T)
else
  git commit -m $1
fi
git push origin master
