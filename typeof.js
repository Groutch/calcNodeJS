function pareil(var1, var2)
{
  if (typeof var1 === typeof var2)
  {
    console.log(var1+" et "+var2+" : Même type");
  }else
  {
    console.log(var1+" et "+var2+" : Pas le même type");
  }
}

pareil(2,3);
pareil(2,"2");
