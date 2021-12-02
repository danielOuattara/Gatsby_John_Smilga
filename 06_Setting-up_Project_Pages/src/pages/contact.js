
import React, { Component } from 'react';
import Layout from '../components/Layout';


export default class Contact extends Component {
    render() {
        return (
            <Layout>
                <main className="page">
                    <section className="contact-page">
                        <article className="contact-info">
                            <h3>Get in Touch ?</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus est aperiam dicta? Voluptatum tempore debitis suscipit ad, praesentium odio magni </p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatibus est aperiam dicta? Voluptatum tempore debitis suscipit ad, praesentium odio magni </p>
                        </article>
                        <article>
                            <form className="form contact-form">
                                <div className="form-row">
                                    <label htmlFor="name">your name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="email">your email</label>
                                    <input type="text" name="email" id="email" />
                                </div>
                                <div className="form-row">
                                    <label htmlFor="message">message</label>
                                    <textarea name="message" id="message"></textarea>
                                </div>
                                <button type="submit" className="btn block"> submit</button>
                            </form>
                        </article>
                    </section>
                </main>
            </Layout>
        );
    }
}
