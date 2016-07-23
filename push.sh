git add .
arg1=$1
if [${#arg1} == 0]
then
  git commit -m $(date+"%T")
else
  git commit -m $1
fi
git push origin master
