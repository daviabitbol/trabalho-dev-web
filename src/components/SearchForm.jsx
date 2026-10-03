import { useState } from "react";
import "./SearchForm.css";

export function SearchForm() {
  const [form, setForm] = useState({
    title: "",
    release_date: "",
    vote_average: "",
  });
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};

    if (!form.title.trim()) {
      novosErros.title = "O titulo nao pode estar vazio";
    }

    if (!form.release_date.trim()) {
      novosErros.release_date = "A data de lançamento nao pode estar vazia";
    }

    if (!form.vote_average.trim()) {
      novosErros.vote_average = "A média nao pode estar vazia";
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

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validar();
    setErros(e);
    if (Object.keys(e).length === 0) alert("Busca realizada");
  }

  function handleBlur() {
    const { name, value } = e.target;
    if (name === "title" && value === "") {
      setErros({ ...erros, title: "Titulo não pode ser vazio" });
    }
    if (name === "release_date" && value === "") {
      setErros({ ...erros, title: "Data de lançamento não pode ser vazia" });
    }
    if (name === "vote_average" && value === "") {
      setErros({ ...erros, title: "Média não pode ser vazia" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulário de busca</h3>
      <label htmlFor="title">Titulo</label>
      <input
        name="title"
        id="title"
        value={form.title}
        onChange={handleChange}
      />
      <label htmlFor="release_date">Data de lançamento</label>
      <input
        name="release_date"
        value={form.release_date}
        onChange={handleChange}
      />
      <label htmlFor="vote_average">Média de votos</label>
      <input
        name="vote_average"
        value={form.vote_average}
        onChange={handleChange}
      />
      <button></button>
    </form>
  );
}
