import axios from "axios";
// import "dotenv/config";

export class TodoService {
  base_url: string | undefined = import.meta.env.VITE_BASE_URL;
  async getAllTodos() {
    try {
      const response = await axios.get(`${this.base_url}`);
      return response.data;
    } catch (err) {
      return [];
    }
  }

  async createTodo(createTodoDTO: { text: string }) {
    try {
      await axios.post(`${this.base_url}`, createTodoDTO);
    } catch (err) {
      console.log(err);
    }
  }

  async markTodoAsDone(id: string) {
    try {
      await axios.get(`${this.base_url}/${id}/done`);
    } catch (err) {
      console.log(err);
    }
  }
}
