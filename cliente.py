
import socket
import threading

def iniciarServidor(c, addr):       
    
    print("Se estableció conexion con: %s" % str(addr))
    
    msg_rec= c.recv(1024)
    sucesos=[]
    direccion=[]
    mensaje=msg_rec.decode("utf-8").split(',')
    for x in range(len(mensaje)):
        if x<len(mensaje)-4:
            direccion.append(mensaje[x])
        else:
            sucesos.append(mensaje[x])

    print(f"Direccion:  {direccion}")
    print(f"Sucesos:  {direccion}")
    c.close()

if __name__ == "__main__":
    
    host=""
    puerto=7000
    s= socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((host, puerto))
    s.listen(5)

    while True:
        (c, addr)=s.accept()
        hilo=threading.Thread(iniciarServidor(c, addr))
        hilo.start()
        print(f"Hilos:  {threading.active_count()}")