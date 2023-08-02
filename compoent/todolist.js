import html from "../javascript/code.js";
import { connect } from "../javascript/store.js";
import todoitem from "./todoitem.js";

function todolist({ todos, filter, filters }) {
    return html`
        <section class="main">
            <input
                id="toggle-all"
                class="toggle-all"
                type="checkbox"
                onchange="dispatch('toggleAll',this.checked)"
                ${todos.every(filters.completed) && "checked"}
            />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos
                    .filter(filters[filter])
                    .map((todo, index) => todoitem({ todo, index }))}
            </ul>
        </section>
    `;
}

export default connect()(todolist);
