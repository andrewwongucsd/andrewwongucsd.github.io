git add .
arg1=$1
zero=0
echo $arg1
echo `date +%Y-%m-%d`
echo $(date +%F+%T)
if [ -z "$1" ]; then
  git commit -m $(date +%F+%T)
else
  git commit -m $1
fi
git push origin master
