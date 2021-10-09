import util as util
from os import system


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
    print("\t**    2 - Salir                      **")
    print("\t**                                   **")
    print("\t**                                   **")
    print("\t***************************************")
    print("")
    print("")
    return input("\tDigite una opcion: ")


if __name__ == '__main__':
    if (pintarMenu() == '1'):
        ruta = input("\tDigite la ruta: ")
        util.escribirArchivo('ruta.txt','')

