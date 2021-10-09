ruta = 'bitacora.txt'


def escribirBitacora(evento):
    archivo = open(ruta, 'a')
    archivo.write(str(evento))
    archivo.close()

