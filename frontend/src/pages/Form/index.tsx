import './styles.css';
import { Link } from "react-router-dom";

function Form() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div className="esmovie-form-container">
            <img className="esmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="esmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="esmovie-form">
                    <div className="form-group esmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group esmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="esmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary esmovie-btn">Salvar</button>
                    </div>
                </form >

                <Link to="/">
                    <button className="btn btn-primary esmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default Form;