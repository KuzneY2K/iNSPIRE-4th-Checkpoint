import { AppState } from "../AppState.js";

export let HomeView = /*html*/`

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offCanvas" aria-labelledby="offCanvasLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offCanvasLabel"></h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          Here you will see your active TODO list. You can check each item to mark it as done or you can create/delete new TODO's. Happy producting.
        </div>
              <form class="p-1 m-0 d-flex flex-column align-content-center mt-3" onsubmit="app.TodoController.createTodo()">
        <input type="text" class="form-control" id="todoDesc" name="description" placeholder="What do you need to do?" maxLength="15">
        <button class="btn btn-success" type="submit">Create</button>
      </form>
        <div class="dropdown mt-3">
          <ul class="mt-5 p-0 m-0 list-unstyled" id="todo-container">
            <li><input class="form-check-input checkbox" type="checkbox" id="myCheckBox" checked><span class="badge grad-custom-2 fs-4">I need to go clean</span><a><i class="mdi mdi-trash-can text-danger fs-3"></i></a></li>
          </ul>
        </div>
      </div>
              <h5 class="offcanvas-title mb-3 ms-3">Incomplete Tasks: <span id="incomplete-count"></span></h5>
    </div>
      
      <section class="row p-0 m-0 position-relative" id="main-container">
      <section class="p-0 m-0 text-secondary pattern-zigzag-xl opacity-25" id="filter">.</section>
                <button class="btn grad-custom-2 shadow py-3 px-4 position-absolute oc-btn rounded rounded-pill" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offCanvas" aria-controls="offCanvas" id="oc-btn">
            CHECK TODO
          </button>
      <div class="col-12 p-0 m-0 welcome back container">
        <h2 class="title text-white text-center" id="welcome-message">Welcome to <br>iNSPIRE<br>Sign in to view
          <br>your
          dashboard.
        </h2>
        <h2 class="title text-white text-center" id="account-name"></h2>
        <!-- CLOCK -->
        <div class="col-12 col-md-4 p-0 m-0">
          <h3 class="text-white d-flex flex-column text-center" id="clock"></h3>
        </div>
        <!-- WEATHER -->
        <div class="col-12 col-md-4 p-0 m-0">
          <h3 class="text-white d-flex flex-column text-center" id="weather" onclick="app.HomeController.toggleDeg()">
        </div>
        <!-- QUOTES -->
        <h4 class="my-quotes text-white text-center p-5 w-100 m-auto" id="quote-container"></h4>
      </div>
      <!-- FILLER -->
      <section class="row p-0 m-0 utilities">
      </section>
      <section class="row p-0 m-0 utilities">
      </section>
    </section>`