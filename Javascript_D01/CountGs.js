function CountGs(x) {
var y=0;
for (i=0;i<=x.length;++i)
{ if  (x[i]=="G")
y=y+1;
}
return y;
}
CountGs("cdsqhchazGSSQCGnncnG");
var result=CountGs("cdsqhchazGSSQCGnncnG");
console.log(result);