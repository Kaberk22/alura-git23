/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package logica;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import persistencia.ConexionBD;
/**
 *
 * @author Karinita
 */
public class cancion {

    private int id;
    private String nombre;
    private String autor;
    private String genero;
    private String enlace;
    private String comentario;
   
     public cancion() {
    }
       
    public cancion getCancion(int id) throws SQLException {
       this.id = id;
       return this.getCancion();
    }
    
         
    public cancion(int id, String nombre, String autor, String categoria, String enlace, String comentario) {
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.genero = categoria;
        this.enlace = enlace;
        this.comentario = comentario;
    }   

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getEnlace() {
        return enlace;
    }

    public void setEnlace(String enlace) {
        this.enlace = enlace;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    @Override
    public String toString() {
        return "cancion{" + "id=" + id + ", nombre=" + nombre + ", autor=" + autor + ", genero=" + genero + ", enlace=" + enlace + ", comentario=" + comentario + '}';
    }

     

    public boolean guardarcancion() {
        ConexionBD conexion = new ConexionBD();
        String sentencia = "INSERT INTO cancion(id, nombre, autor, genero, enlace, comentario) "
                + " VALUES ( '" + this.id + "','" + this.nombre + "',"
                + "'" + this.autor + "','" + this.genero + "','" + this.enlace + "',"
                + this.comentario + "'); ";
           if (conexion.setAutoCommitBD(false)) {
            if (conexion.insertarBD(sentencia)) {
                conexion.commitBD();
                conexion.cerrarConexion();
                return true;
            } else {
                conexion.rollbackBD();
                conexion.cerrarConexion();
                return false;
            }
        } else {
            conexion.cerrarConexion();
            return false;
        }
    }

    public boolean borrarcancion(int id) {
        String Sentencia = "DELETE FROM `cancion` WHERE `Id`='" + id + "'" ;
        ConexionBD conexion = new ConexionBD();
        if (conexion.setAutoCommitBD(false)) {
            if (conexion.actualizarBD(Sentencia)) {
                conexion.commitBD();
                conexion.cerrarConexion();
                return true;
            } else {
                conexion.rollbackBD();
                conexion.cerrarConexion();
                return false;
            }
        } else {
            conexion.cerrarConexion();
            return false;
        }
    }

    public boolean actualizarcancion() {
        ConexionBD conexion = new ConexionBD();
        String Sentencia = "UPDATE `cancion` SET nombre='" + this.nombre + "',autor='" + this.autor
                + "',genero='" + this.genero + "',enlace='" + this.enlace + "',comentario='" + this.comentario
                +  "' WHERE id=" + this.id + ";";
        if (conexion.setAutoCommitBD(false)) {
            if (conexion.actualizarBD(Sentencia)) {
                conexion.commitBD();
                conexion.cerrarConexion();
                return true;
            } else {
                conexion.rollbackBD();
                conexion.cerrarConexion();
                return false;
            }
        } else {
            conexion.cerrarConexion();
            return false;
        }
    }

    public List<cancion> listarcanciones() throws SQLException {
        ConexionBD conexion = new ConexionBD();
        List<cancion> listacanciones = new ArrayList<>();
        String sql = "select * from cancion order by id asc";
        ResultSet rs = conexion.consultarBD(sql);
        cancion c;
        while (rs.next()) {
            c = new cancion();
            c.setId(rs.getInt("Id"));
            c.setNombre(rs.getString("nombre"));
            c.setAutor(rs.getString("autor"));
            c.setGenero(rs.getString("genero"));
            c.setEnlace(rs.getString("enlace"));
            c.setComentario(rs.getString("comentario"));
            listacanciones.add(c);

        }
        conexion.cerrarConexion();
        return listacanciones;
    }

    public cancion getCancion() throws SQLException {
        ConexionBD conexion = new ConexionBD();
        String sql = "select * from cancion where id='" + this.id + "'";
        ResultSet rs = conexion.consultarBD(sql);
        if (rs.next()) {
            this.id = rs.getInt("id");
            this.nombre = rs.getString("nombre");
            this.autor = rs.getString("autor");
            this.genero = rs.getString("genero");
            this.enlace = rs.getString("enlace");
            this.comentario = rs.getString("comentario");
            conexion.cerrarConexion();
            return this;

        } else {
            conexion.cerrarConexion();
            return null;
        }

    }

} 

