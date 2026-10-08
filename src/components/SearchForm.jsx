import { useState } from "react";
import "./SearchForm.css";

export function SearchForm() {
  const [form, setForm] = useState({
    title: ""
  });
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};

    if (!form.title.trim()) {
      novosErros.title = "O titulo nao pode estar vazio";
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    if (erros[name]) {
      setErros({ ...erros, [name]: undefined });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulário de busca</h3>
      <label htmlFor="title">Titulo</label>
      <input
      placeholder="Ex: Resident Evil..."
        name="title"
        id="title"
        value={form.title}
        onChange={handleChange}
      />
      <button className="submit-btn">Enviar</button>
    </form>
  );
}
