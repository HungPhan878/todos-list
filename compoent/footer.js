import html from "../javascript/code.js";
import { connect } from "../javascript/store.js";

function footer({ todos, filter, filters }) {
    return html`
        <footer class="footer">
            <span class="todo-count"
                ><strong>${todos.filter(filters.active).length}</strong> item
                left</span
            >

            <ul class="filters">
                ${Object.keys(filters).map(
                    (type) => html`<li>
                        <a
                            class="${type === filter && "selected"}"
                            onclick="dispatch('changeFilter', '${type}')"
                            href="#/"
                            >${type[0].toUpperCase() + type.slice(1)}</a
                        >
                    </li>`
                )}
            </ul>

            ${todos.filter(filters.completed).length > 0 &&
            html` <button
                class="clear-completed"
                onclick="dispatch('clearCompleted')"
            >
                Clear completed
            </button>`}
        </footer>
    `;
}

export default connect()(footer);
