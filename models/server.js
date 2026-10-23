import express from "express";
import "dotenv/config";
import cors from 'cors'

export class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;

    this.middlewares();
    this.routes();
  }
  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        menssage: "hola - server",
      });
    });

     this.app.post("/api", (req, res) => {
      res.json({
        menssage: "post - server",
      });
    });
    this.app.put("/api", (req, res) => {
      res.json({
        menssage: "put - server",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.json({
        menssage: "delete - server",
      });
    });
  } 
  
  
  //METODO 3 DE MI CLASE SERVIDOR
  middlewares() {
    this.app.use(cors());
    this.app.use(express.static("public"));
    this.app.use(express.json());
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo en el puerto: ${this.port}`);
    });
  }
}
export default Server;
