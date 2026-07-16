export function PadronizarCpf(cpf:string):string{
     
  cpf = cpf.replace(/\D/g, '');

  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return cpf;
}

export function SomenteNumeros(cpf:string):string{
  return cpf.replace('.','').replace('-','');
}