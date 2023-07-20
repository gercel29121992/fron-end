export function toBase64(file: File){
    return new Promise((resolve, reject) => {
        const reader  = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    })
}

export function parsearErroresAPI(response: any): string[] {
  const resultado: string[] = [];

  console.log(response.status);

  if (response.status === 500){
    resultado.push('Ha ocurrido un error en el servidor. Favor intentar más tarde');
    return resultado;
  }
  console.log(response);

  if (response.error) {
    if (typeof response.error === 'string') {
      resultado.push(response.error);
    } else {
        console.log(response.error.errors[0]);
      const mapaErrores = response.error.errors[0];
      const entradas = Object.entries(mapaErrores);
      console.log(entradas);
      entradas.forEach((arreglo: any[]) => {
        const campo = arreglo[0];
       
          resultado.push(`${arreglo[0]}: ${arreglo[1]}`);
        
      });
    }
  }

  return resultado;
}
