    
function print(n) {
    let tag=''

for (let i = 1; i <= n; i++) {
    
   
    for (let s = n - 1; s >= i; s--) {
        tag += ' '
    }
    
   
    for (let j = 1; j <= i; j++) {
        tag += '#'
    }
   
    tag += "\n"
}
return tag;
}
  