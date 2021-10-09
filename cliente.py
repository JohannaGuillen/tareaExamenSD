import util as util
from os import system
import os
import threading
import time

flag = True


def pintarMenu():
    system('cls')
    print("")
    print("")
    print("\t***************************************")
    print("\t************** Examen 1 ***************")
    print("\t**                                   **")
    print("\t**        Presione una opción        **")
    print("\t**                                   **")
    print("\t**    1 - Ingresar ruta              **")
    print("\t**    2 - Iniciar Hilo Cliente       **")
    print("\t**    3 - Salir                      **")
    print("\t**                                   **")
    print("\t**                                   **")
    print("\t***************************************")
    print("")
    print("")
    return input("\tDigite una opcion: ")


def leerRuta():
    while(flag == True):
        time.sleep(1)
        if(os.path.exists('ruta.txt')):
            util.escribirArchivo('bitacora.txt', '\n[1,2,3,0]')
            time.sleep(5)
            os.remove("ruta.txt")


if __name__ == '__main__':
    hiloCLiente = threading.Thread(target=leerRuta)
    hiloCLiente.start()
    while(flag == True):
        if (pintarMenu() == '1'):
            ruta = input("\tDigite la ruta: ")
            util.escribirArchivo('ruta.txt', ruta)
        elif (pintarMenu() == '1'):
            flag = False
