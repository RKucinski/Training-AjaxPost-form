import React, { Component } from 'react'



class FormEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
        const url = "http://92.175.11.66:3001/api/quests/movies/";

        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };


        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Votre film a bien été enregistré avec l'ID ${res}!`);
                }
            })
            .catch(e => {
                console.error(e);
                alert('Hmmm non, ça ne marchera pas');
            });
    }



render() {
    return (
        <div>
            <div className="FormFilm">
                <h1>Votez pour votre film préféré !!!</h1>

                <form onSubmit={this.submitForm} id="filmForm">
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="name">Nom de votre film préféré</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">URL vers l'affiche de votre film</label>
                            <input
                                type="url"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Pourquoi ce film-ci ?</label>
                            <textarea
                                form="filmForm"
                                rows="6"
                                cols="65"
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
}

export default FormEmployee