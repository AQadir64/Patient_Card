import React, { Component } from "react";
import {Link,Route} from "react-router-dom"
class MainPage extends Component {
  render() {
    return (
      <div>
        <header>
          <img src="../imgs/logo.png" alt="" />
          <h1>PATIENT CARD</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            eaque obcaecati quibusdam ab nulla fugit facere dicta, illum atque
            reiciendis!
          </p>
        </header>
        <section>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            molestias perspiciatis necessitatibus eius, voluptates earum ab
            dolore pariatur possimus fugiat unde veniam odio minus et maxime
            provident dolores magni porro voluptatum aspernatur ducimus error
            consequatur. Culpa sequi in est repudiandae ducimus eaque itaque
            perferendis possimus cumque quam ad tenetur voluptatibus accusamus,
            dolore officia a modi nobis cupiditate quis porro? Atque ab
            repellendus autem, nam maxime doloremque praesentium quaerat impedit
            laborum inventore necessitatibus maiores eligendi voluptatibus vel
            omnis placeat labore error cum asperiores, numquam eos ullam? Qui
            sint sunt autem quo animi rerum sed hic eos explicabo. Perspiciatis
            nesciunt ipsum inventore?
          </p>
        </section>
        <section>
          <h1>Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            molestias perspiciatis necessitatibus eius, voluptates earum ab
            dolore pariatur possimus fugiat unde veniam odio minus et maxime
            provident dolores magni porro voluptatum aspernatur ducimus error
            consequatur. Culpa sequi in est repudiandae ducimus eaque itaque
            perferendis possimus cumque quam ad tenetur voluptatibus accusamus,
            dolore officia a modi nobis cupiditate quis porro? Atque ab
            repellendus autem, nam maxime doloremque praesentium quaerat impedit
            laborum inventore necessitatibus maiores eligendi voluptatibus vel
            omnis placeat labore error cum asperiores, numquam eos ullam? Qui
            sint sunt autem quo animi rerum sed hic eos explicabo. Perspiciatis
            nesciunt ipsum inventore?
          </p>
        </section>
        <footer>
          <h2>All rights reserved to patient card</h2>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h3>Lorem, ipsum dolor.</h3>
        </footer>
        <hr/>
      </div>
    );
  }
}

export default MainPage;
