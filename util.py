def escribirArchivo(ruta,evento):
    archivo = open(ruta, 'a')
    archivo.write(str(evento))
    archivo.close()

