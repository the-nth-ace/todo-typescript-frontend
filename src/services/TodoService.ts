import axios from "axios";

export class TodoService {
  async getAllTodos() {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/");
      return response.data;
    } catch (err) {
      return [];
    }
  }

  async createTodo(createTodoDTO: { text: string }) {
    try {
      const resonse = await axios.post(
        "http://localhost:5000/api/v1",
        createTodoDTO
      );
    } catch (err) {
      console.log(err);
    }
  }

  async markTodoAsDone(id: string) {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/${id}/done`
      );
    } catch (err) {
      console.log(err);
    }
  }
}
