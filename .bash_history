ls -al
pwd
ls /mnt/
cd /mnt/c
clear
ls -al
cd Users/
ls -al
clear
cd Desktop/
cd /mnt/c
ls -al
cd Users/
ls -al
cd info
ls -al
clear
cd Desktop/
touch test.txt
nano test.txt
cat test.txt
code
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
git --version
git config --global user.name "Aehsan4004"
git config --global user.email "112286900+Aehsan4004@users.noreply.github.com"
git config --global init.defaultBranch main
git config --global pull.rebase false
git config --get user.name
git config --get user.email
ls ~/.ssh/id_ed25519.pub
ssh-keygen -t ed25519
cat ~/.ssh/id_ed25519.pub
ssh -T git@github.com
# Attempts to ssh to GitHub
mkdir repos
cd repos/
git clone git@github.com:Aehsan4004/git_test.git
cd git_test
git remote -v
touch hello_world.txt
git status
git add hello_world.txt
git status
git commit -m "Add hello_world.txt"
git status
git log
code
git clone git@github.com:Aehsan4004/git_test.git
cd git_test
git remote -v
touch hello_world.txt
git status
git commit -m "Add hello_world.txt"
git add
git log
code
git status
git add README.md
git status
git add
git add .
git status
git commit -m "Edit README.md and hello_world.txt"
git status
git log
git push
git status
git status
git config --global core.editor "code --wait"
git commit
code
git clone git@github.com:Aehsan4004/odin-recipes.git
cd odin-recipes
code
cd odin-recipes
git clone git@github.com:Aehsan4004/odin-recipes.git
cd odin-recipes
code .
git add
git add .
git commit -m "recipe website completed"
git push
git clone git@github.com:Aehsan4004/odin-css-exercises.git
ssh-keygen -f "~/.ssh/known_hosts" -R "github.com"
nano ~/.ssh/known_hosts
ls ~/.ssh
ssh-keygen -f ~/.ssh/known_hosts -R github.com
ssh-keyscan -t ed25519 github.com >> ~/.ssh/known_hosts
ssh-keygen -l -f ~/.ssh/known_hosts | grep github.com
ssh -T git@github.com
git@github.com:Aehsan4004/odin-css-exercises.git
git clone git@github.com:Aehsan4004/odin-css-exercises.git
code .
pwd
code
wsl --list
code
git clone git@github.com:Aehsan4004/odinlandpage.git
cd odinlandpage
code
